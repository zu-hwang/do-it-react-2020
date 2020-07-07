import React, { Component } from 'react';
import { setCollection } from '/redux/actions';

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 액션크리에이터함수 setCollection()에게 초기값을 전달한다.
    const initState = [
      {
        id: 1,
        name: 'hwang',
        age: 20,
      },
      {
        id: 2,
        name: 'zuzu',
        age: 30,
      },
    ];
    this.state.dispatch(setCollection(initState));
  }

  render() {
    return <div></div>;
  }
}
export default App;
