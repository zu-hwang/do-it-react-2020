import React from 'react';

// 익명함수 생성
export default function (loadingMsg = '로딩중') {
  return function withLoading(WrappedCompo) {
    const { displayName, name: componentName } = WrappedCompo;
    const wrappedCompoName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMsg;
      return <WrappedCompo {...otherProps}></WrappedCompo>;
    }
    WithLoading.displayName = `withLoading(${wrappedCompoName})`;
    return WithLoading;
  };
}
