import React from 'react';
import withStyles, {
  css,
} from '../../../../../ch01-basic/unit04/src/components/withStyles'; // 뒤로가기 지옥!..

export default function (defaultMsg) {
  return (WrappedCompont) => {
    const { displayName, name: componentName } = WrappedCompont;
    const WrappedCompontName = displayName || componentName;

    function ComponentWithError({ hasError, errorMsg, styles, ...props }) {
      return (
        <>
          <WrappedCompont {...props}></WrappedCompont>
          {hasError && <div {...css(styles.error)}>{errorMsg}</div>}
        </>
      );
    }
    ComponentWithError.defaultProps = {
      errorMsg: defaultMsg,
    };
    ComponentWithError.displayName = `withError(${WrappedCompontName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
