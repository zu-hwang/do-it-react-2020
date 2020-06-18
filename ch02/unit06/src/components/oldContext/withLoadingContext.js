import React from 'react';
import PTypes from 'prop-types';

// 익명함수로 export default 설정
export default function (WrappedComponent) {
  // 네임스페이스 설정을 위한 변수정리
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  // 인자로 받은 컴포넌트 리턴하는 함수
  function WithLoadingContext(props, context) {
    // 컨텍스트 구조분해
    const { loading, setLoading } = context;
    return (
      // 전달받은 컴포넌트에 props와 context전달
      <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
    );
  }
  WithLoadingContext.displayName = `withLoadingContext ${wrappedComponentName}`;
  WithLoadingContext.contextType = {
    loading: PTypes.bool,
    setLoading: PTypes.func,
  };
  return WithLoadingContext;
}
