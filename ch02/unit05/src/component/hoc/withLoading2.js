import React from 'react';

// HOC를 구현하자
// 인자는 (내부 컴포넌트, 로딩메세지='기본값')
export default function withLoading(wrappedCompo, loadingMsg = '로딩 중') {
  // 내부 컴포넌트의 기본 속성 displayName과 componentName 분리

  console.log(`displayName : ${wrappedCompo.displayName}
  name :  ${wrappedCompo.name}
  componentName : ${wrappedCompo.componentName}`);
  const { displayName, name: componentName } = wrappedCompo;
  const wrappedCompoName = displayName || componentName;

  // 내부 컴포넌트 시작
  function WithLoading({ isLoading, ...otherProps }) {
    if (isLoading) return loadingMsg;
    return <wrappedCompo {...otherProps} />;
  }
  // 내부컴포넌트의 이름 지정
  WithLoading.displayName = wrappedCompoName;

  // 내부 컴포넌트 리턴
  return WithLoading;
}
