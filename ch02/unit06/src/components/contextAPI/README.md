# contextAPI

리액트 16.3버전 이후 본격편입된 context 기능을 알아보자.

- `createContext()` : 컨택스트 생성하는 함수, **공급자/소비자를 반환**
  ```js
  const { Provider, Consumer } = React.createContext(defaultValue)
  // 또는 
  const myContext = React.createContext(defaultValue)
  myContext.Provider // 공급자
  myContext.Consumer // 소비자
  ```

- contextAPI를 사용시 `contextTypes`, `childContextTypes` 속성을 일일의 정하지 않아도 된다.


## `컴포넌트명.displayName` 속성
displayName 속성도 여전히 사용가능하다. 해당 속성은 개발자도구에서 컴포넌트명 표기를 담당한다.


## style theme 적용

### [테마적용](https://ko.reactjs.org/docs/context.html#dynamic-context)

## 여러 공급자/소비자 사용하기
중첩으로 겹처 작성하며, 최하위 공급자에 우선 적용된다.