import React from 'react';

/**
 * 로딩페이지를 표현하는 withLoading HOC를 구현해보자.
 * ? 1. displayName 지정하여, 데브툴/스토리북/콘솔에서 보기 좋게 표현
 * ? 2. props 구조분해할당으로 isLoading Props를 분리, 나머지 전개연산자를 통해 props 정리, 전달
 * ? 3. 로딩 메세지는 내부함수 WithLoading에 지정하여 변경할 수 없다.
 * (변경하기는 withLoading2.js 파일 확인)
 */

export default function withLoading(WrappedCompo) {
  const { displayName, name: componentName } = WrappedCompo;
  // 컴포넌트의 displayName을 먼저 할당, 없을 경우 컴포넌트 명을 할당한다.
  const wrappedCompoName = displayName || componentName;

  function WithLoading({ isLoading, ...otherProps }) {
    //! 프롭퍼티 .isLoading를 따로빼낸뒤,
    //! 나머지 프롭스를 전개연산자로 otherProps로 받는다.
    // otherProps의 이름은 내맘대로 정하면 된다!
    if (props.isLoading) return '로딩중';
    return <WeappedCompo {...otherProps} />; // 모든 프로퍼티 반환
  }
  WithLoading.displayName = `withLoading(${wrappedCompoName})`;
  return WithLoading; // 인자로 들어온 컴포넌트 반환 컴포넌트 반환
}
