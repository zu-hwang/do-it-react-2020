/**
 * 1개 구독 소비자 만들기
 */

import React from 'react';

//! 프로바이더로부터 소비자 import
import { Consumer } from './LoadingProvider';

// 프로바이저만 아니면 함수컴포넌트 사용가능!
function LoadingConsumer() {
  return (
    <>
      {/* value로 받아옴, {loading, setLoading} 으로 구조분해 가능*/}
      <Consumer
        children={(value) => (
          <button onPress={() => value.setLoading('loading', !value.loading)}>
            {value.loading ? '로딩중' : '완료'}
          </button>
        )}
      />
      {/*  보통 아래방식으로 많이 쓴다. */}
      <Consumer>
        {({ loading, setLoading }) => {
          return (
            <button onClick={setLoading}>{loading ? '로딩중' : '완료'}</button>
          );
        }}
      </Consumer>
    </>
  );
}

export default LoadingConsumer;
