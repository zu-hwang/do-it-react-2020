# 컨텍스트

- `src/components/oldContext` : **옛날방식, 안씀**. 리액트 16.3 버전 이전의 context 사용법
- `src/components/contextAPI` : 리액트 16.3버전 이후 contextAPI 사용

최상위 컴포넌트에서 하위 컴포넌트로 전달 될때 props의 데이터가 누락 될 수있으며, 값 변화가 없는 중간 컴포넌트 모두 다시 렌더 되며 리액트 성능에 문제가 생긴다. 이런 문제를 해결하기 위해 데이터가 필요한 곳에서만 직접 전달받는 방법이 컨텍스트의 흐림이 된다.

## `React.createContext()`
