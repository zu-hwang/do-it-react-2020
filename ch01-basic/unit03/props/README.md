# Props

- 프로퍼티(props) : 상위 컴포에서 하위 컴포로 전달되는 **읽기 전용 데이터**

## 프로퍼티의 자료형 `.propTypes`

프로퍼티는 미리 선언해 주는 것이 좋다. 프로퍼티의 자요형을 미리 선언하면 리액트 앤진이 프로퍼티로 전달하는 값의 변화를 효율적으로 감자할 수 있고, 개발자 실수로 정의되지 않은 자료형을 프로퍼티로 전달하려 할때 경고메세지로 알려주기 때문이다(버그예방)

```jsx
// 프로퍼티 자료형을 지정하기 위한 임포트
import PropTypes from 'prop-types';

// 컴포넌트 구현

// 프로퍼티 자료형 지정
컴포넌트명.propTypes = {
  // 속성명은 propTypes
  프롭스명1: PropTypes.string, // 문자열 //! 여기서 쓰는 PropTypes는 모듈명
  프롭스명2: PropTypes.number, // 숫자
  프롭스명3: PropTypes.bool, // 불린
  프롭스명4: PropTypes.object, //객체
  프롭스명5: PropTypes.func, // 함수
  프롭스명5: PropTypes.node, // 노드
  프롭스명5: PropTypes.arrayOf(PropTypes.number), // 숫자로 구성된 배열
};
```

### bool 프로퍼티 속성

컴포넌트에 props를 전달할때 **프로퍼티명을 사용한다면 참**, 프로퍼티 이름을 **전달하지 않는다면 거짓**
서버를 열고 `PropTypeBool.js`과 `App.js`를 확인해보자.

### object 프로퍼티 속성

object 프로퍼티의 내부 속성을 지정하고 싶다면 `.shape()`메서드를 사용하여 각 키에 대한 데이터 형을 지정한다.

### array 프로퍼티 속성

배열의 내무 인댁스의 속성을 지정하고 싶다면

### 필수 프로퍼티 지정 `.isRequired`

`[프롭스명] : PTypes.<자료형>.isRequired` : 프로퍼티 자료형의 특수 변수. 특정 컴포넌트에 꼭 전달되어야 하는 값을 지정한다. 프로퍼티 명만 입력된다면 에러는 나지 않는듯..?

### 기본 프로퍼티 묶음 지정 `.defaultProps`

`[컴포넌트명].defaultProps = {...}`

### 자식컴포넌트를 프로퍼티로 지정하기

부모컴포넌트에 자식컴포넌트를 불러올때 `{this.props.children}` 을 사용한다. 여기서 프롭스 지정은 `PTypes.node`로 한다.
