# 클래스형 컴포넌트

- 컴포넌트 Component
- 퓨어컴포넌트 PureComponent

## component

props, state, life-cycle 함수가 들어있는 컴포넌트.

## pure component

`shouldcomponentUpdate()`함수를 '얕은 비교'를 통해 데이터가 변경된 경우만 `render()`함수를 호출한다. 일반 component는 라이프사이클이 불리면 무조건 `render()`를 호출한다.

> 컴포넌트의 성능을 높이기 위해서는 pure-component의 사용과 불변변수사용을 할 수 있다. 만약 airbnb에서 숙소 정보를 화면에 출력할때, 1000개의 숙소정보 중 1개만 변경되었을때, 가장 효율 적인 방법은 불변변수를 활용해 새별을을 할항다는 방식으로 비교속도를 최적화 할 수 있다.(999개의 정보까지 비교하면 비효율 적이다.)

# 함수형 컴포넌트

state, life-cycle이 없는 컴포넌트를 말하며 줄려 SFC라고 한다. 하지만 최근 hook에서 함수형에서도 state와 life-cycle일부를 구현할 수 있게 되었다.

> `TodaysPlanApp.js`와 `TodaysPlanAppSFC.js`를 비교하자!

# 배열 컴포넌트

- `map()` 함수를 활용한 컴포넌트 출력
