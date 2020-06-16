# state

## 화살표함수 와 `.bind()`

컴포넌트를 생성했을때 컴포넌트 내의 함수에서 `this`키워드 사용시 함수의 스코프를 지정하기 위해 `.bind()`를 해주어야한다.
`constructor()`내에 바인드를 지정하며, 매번 바인드로 붂는것은 귀찮기 때문에 함수를 **화살표 함수를 지정하여 편히 작성**하도록 하자.

## `forceUpdate()` : **사용자제**

`setState()`로 state를 관리해야 리액트 엔진이 업데이트 된 내용을 자동으로 렌더링 해준다. 만약 출력검증없이 화면을 강제로 출력하주어야 한다면 `forceUpdate()`를 사용한다. **하지만 사용하면 리액트 성능에 제약이 있음으로 사용하지 않는 것이 좋다.**

## 생명주기 (life cycle)

> 생명주기 확인시 콘솔로그 2번 출력 문제 : react Strict모드 사용시 2번 출력하게 된다. 걍 정상임 걱정 노오오노오~

컴포넌트가 생성 - 소멸까지 과정을 생명주기라 부른다. 각 순서에 해당하는 함수를 사용하여 특정위치에서 원하는 동작을 할 수 있게 된다.

- `constructor()` : 컴포넌트가 호출되면 가장먼저 실행, 초기값을 담는다.
- `getDerivedStateFromProp()` :
- `render()` : 화면을 가상돔에 그린다.
- `componentDidMount()` : 화면을 출력하기 바로 직전에 호출되며, 해당위치에서 state가 변경된다면 `render()`가 다시 실행된다.
- `shouldComponentUpdate()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`
- `componentWillUnmount()` : 컴포넌트 해재 직전 실행

> **생명주기 순서**
> constructor > getDerivedStateFromProp > render > componentDidMount > 생성완료
> getDrivedStateFromProp > shouldComponentUpdate > render> getSnapshotBeforeUpdate > componentDidUpdate > 갱신완료 > > componentWillUnmount > 소멸 완료

### `constructor(props)`

컴포넌트 호출이 되면 맨처음 실행되며 딱 1회 실행되는 초기값을 담는 함수다. `super(props)`를 내부에 포함하여 호출한다.

- `super()`는 프로퍼티와 생명주기상태를 초기화 하는 과정을 포함하고 있는 함수다.

### `render()`

데이터가 변경되어 새화면을 그릴때 자동으로 호출되는 함수다.

### `static getDerivedStateFromProps(props,state)`

getDrivedStateFromProps() 함수는 정적함수다. 따라서 this.props나 this.state같은 방법으로 props, state 값에 접근 할 수 없다. 만약 값에 접근해야 하는 경우 반드시 인자로 전달된 props,state를 이용해야 한다. 이때 props는 상위컴포에서 전달된 값이며, state는 현재 컴포의 state값이다. **이 함수는 상위 컴포넌트에서 전달받은 props로 state값에 연동할때 주로 사용된다. 반환값으로 state를 변경**한다.

### `componentDidMount()`

render()함수가 처음 화면을 그린 뒤 실행된다. 화면의 node(DOM,태그)를 변경할때, 화면이 그려진 뒤 실행해야하는 동작은 여기에서 실행 시킨다.

### `shouldComponentUpdate(nextProps, nextState)`

props를 변경하거나 `setState()`함수를 호출하여 state값을 변경하면 **화면을 새로 출력해야 하나?** 를 판단하는 함수다. **데이터의 변화를 비교하여 화면을 다시 그림으로 리액트 성능에 영향을 많이 준다**. 화면변경을 위해 검증작업을 해야 하는 경우 이 함수를 사용하면 된다. forceUpdate()함수를 사용해 화면을 출력하면 이 함수는 호출 되지 않으니 유의!

### `getSnapshotBeforeUpdate(prevProps,prevState)`

컴포넌트의 변경된 내용이 가상화면에 완성된 이후 호출되는 함수, 이함수는 컴포넌트가 화면에 실제로 출력되기 전에 호출되므로 **화면에 출력될 엘리먼트의 크기 또는 스크롤 위치 등 DOM정보에 접근할때 사용**된다.

### `componentDidUpdate(prevProps, prevState, snapshot)`

컴포넌트가 실제 화면에 그려진 뒤, 전달받은 이전 프롭스값 = `prevProps`, 이전 스테이트 = `prevState` 와 `getSnapshotBeforeUpdate()`함수에서 반환된 `snapshot을` 인자로 전달 받는다. **스크롤 위치를 옮기거나 커서를 이동시키는 등의 DOM정보를 변경할때 사용**된다.

### `componentWillUnmount()`

컴포넌트가 소멸되기 직전에 호출되는 함수, 보통 컴포넌트에서 감시하고 있는 작업들을 해제할때 필요한 함수로, `setInterval()`함수가 사용되었다면 여기서 `cleanInterval()`을 지정한다.
