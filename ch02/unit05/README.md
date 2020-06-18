# unit 05. 하이어오더 컴포넌트

- [커링](##커링)
- [조합](##조합)
- [하이어오더 컴포넌트](##하이어오더컴포넌트)
  - [상속](##상속)
  - [데코레이터](##데코레이터)

## 커링

커링은 **함수를 반환하는 함수**, 커링을 사용하는 이유는 *함수의 재활용 때문*이다.

```js
// src/component/curring/curring1.js 내용 보기
// src/component/curring/curring2.js 내용 보기
```

> `func()()` 과 같이 함수를 `()` 2번과 함께 호출되는 방식에 익숙해지자.

## 조합

함수는 **뒤에서 부터 앞으로 실행**된다.

### `compose()` 함수

조합 함수의 실행순서를 정확히 하기 위해 커링 함수를 순서대로 조합하는 compose() 함수를 만들어보자.

`[func2, func3, func4].reduce(<여기에 1번함수 로직구현>, function(k) {return k})`

```js
// * 조합 compose()함수 로직
[func2, func3, func4].reduce(
  (prevFunc, nextFunc) => {
    return (value) => {
      return nextFunc(prevFunc(value));
    };
  },
  // 콜백 익명함수
  (k) => {
    return k;
  }
);
```

### 실무 함수조합 기법

#### 1. arguments를 사용하여 배열 인자 대신 나열형 인자로 함수구조를 유연하게 만들기

```js
function compose() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    function (k) {
      return k;
    }
  );
}
```

- `Array.prototype.slice.call(arguments)` : 나열로 들어온 args를 배열로 변환한다.

#### 2. arguments를 활용하여 하나의 실행인자 value를 다중인자로 사용 가능하게 확장하기

```js
function compose() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        // args 변수 추가 : 여러 인자를 받는 함수를 사용한다면 아래와 같이 .apply()를 사용한다.
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (k) {
      return k;
    }
  );
}
```

#### 3. 전개연산자로 더 간결하게 만들기

2번에서 `.apply()`를 사용하지 않고 전개연산자를 사용하면 더 단순해진다.justify-around

```js
function compose(...funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    }
  );
}
```

#### 4. 함수조합 실행하기

```js
const composeA = compose(multiplyTwo, multiplyThree, addFour);
const x = 10;
composeA(x);
```

#### 5. 다양한 연산

```js
// => ((x*2)*3)+4 동일 함수 표현식
const composeA1 = compose(multiplyX(2), multiplyX(3), addX(4));

// 조합 함수 없이 표현한 경우
const composeA2 = addX(4)(multiplyX(3)(multiplyX(2)));

// (((x*2)+5)*3)+4 연산
const composeB1 = compose(multiplyX(x), addX(5), multiplyX(3), addX(4));

// 조합함수 없이 표현
const composeB2 = addX(4)(multiplyX(3)(addX(5)(multiplyX(2))));
```

## 하이어오더컴포넌트

하이어오더 컴포넌트는 <u>컴포 + 새로운기능 추가!</u> 하이어오더 컴포넌트는 자바스크립트의 고차함수(Higher-order function)에서 유래되었다. 커링함수 = 고차함수라고 함. 하이어 오더 컴포넌트는 **함수컴포 & 클래스컴포 모두 반환**(`src/component/hoc/hoc1.js`)할 수 있다.

- 하이어오더 컴포넌트는 기존 컴포에 연결된 프로퍼티를 모두 전달해 주어야 한다.
- 하이어오더 컴포넌트와 확장컴포의 이름은 **with**로 시작한다.
- `` static displayName = `<with이름지정${컴포넌트명.name}>` ``으로 데브툴,스토리북등 HOC함수 출력이름을 지정한다.
- 로딩화면을 하이어오더 컴포넌트로 구현하면 효율적이다.

> #### 로딩화면 컴포넌트 구현하기
>
> 로딩페이지를 표현하는 withLoading HOC를 구현해보자.
>
> 1. displayName 지정하여, 데브툴/스토리북/콘솔에서 보기 좋게 표현
> 2. props 구조분해할당으로 isLoading Props를 분리, 나머지 전개연산자를 통해 props 정리, 전달
> 3. 로딩 메세지는 내부함수 WithLoading에서 구현
>
> `src/component/hoc/withLoading1.js` : 로딩메세지 변경 불가능 (지정메세지)
> `src/component/hoc/withLoading2.js` : 로딩메세지 변경가능
> `src/component/hoc/withLoading3.js` : 다중 커링 사용하기

### recompose 라이브러리

HOC 라이브러리 사용하기! recompose라이브러리는 몇가지 유용한 HOC 기능을 사용해보쟝. 하지만 **recompose의 모든 함수를 임포트하면 프로젝트가 무거워짐으로 필요한 함수만 추출하여 임포트 하는 것이 효율적**이다.

- branch
- withState : `this.state`, `this.setState()` 없이도 withState로 state를 변경 할 수 있다.

```js
//!  비효율 적인 임포팅 방식
import { branch, withState } from 'recompose';

//! 효율적인 임포팅 방식
import branch from 'recompose/branch';
import withState from 'recompose/withState';
```

- 설치 : `yarn add recompose`
- 예제코드 : `src/component/hoc/recompose.js`

### 상속

예제없음
**상속 패턴의 단점**

- 원치 않는 모든 내용을 상속받게 된다.
- 상위를 변경하면 상속구조 역시 변경됨
- 상속구조의 깊이 때문에 상속항목을 한눈에 판단하기 어렵어렵!

### 데코레이터

예제없음
상속의 문제점을 보환한, **기존의 구조를 해치지 않고 원하는 구조만 상속받는 방법**
