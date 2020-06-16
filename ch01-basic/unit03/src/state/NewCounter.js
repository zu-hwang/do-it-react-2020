import React from 'react';
import MiniCount from './MiniCount';
import Counter from './Counter';

class NewCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 3,
    };
  }
  resetCount = () => {
    this.setState(({ count }) => ({ count: count + 10 }));
  };
  render() {
    return (
      <>
        <Counter count={this.state.count}></Counter>
        <MiniCount count={this.state.count}></MiniCount>
        <button onClick={this.resetCount}>
          {this.state.count + 10}으로 초기화
        </button>
      </>
    );
  }
}
export default NewCounter;
