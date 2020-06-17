import React from 'react';
import withStyles, { css } from './withStyles';

export default function (defaultMsg) {
  return (WrappedCompo) => {
    const { displayName, name: componentName } = WrappedCompo;
    const WrappedCompoName = displayName || componentName;

    function ComponentWithError({ hasError, errorMsg, styles, ...props }) {
      <>
        <WrappedCompo {...props} />
        {hasError && <div {...css(styles.error)}>{errorMsg}</div>}
      </>;
    }
    ComponentWithError.defaultProps = {
      errorMsg: defaultMsg,
    };
    ComponentWithError.displayName = `withError(${WrappedCompoName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
