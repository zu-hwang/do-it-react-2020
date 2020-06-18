/**
 * HOC 소비자 component
 */

import React from 'react';
import PTypes from 'prop-types';
import Button from './Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext({ label, children, loading, setLoading }) {
  return <Button onClick={setLoading}>{loading ? '로딩중' : children}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  children: PTypes.node,
  label: PTypes.string,
  loading: PTypes.bool,
  setLoading: PTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);
