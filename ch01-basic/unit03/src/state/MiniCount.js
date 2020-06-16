import React from 'react';

class MiniCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props; // 전달받은 프롭스 쪼개기
    return {
      // 이 생명주기는 리턴이 필수다! 리턴은 {현재 props, 새로운 state값}
      count, // 최초의 프로퍼티 값은 state.count 에 저장한다.
      // state.newCount 로 증가하는 값을 따로 저장한다. 비교해야 하기 때문에 기존값과 새 비교값을 따로 관리한다.
      newCount: count === state.count ? state.newCount : count,
    };
  }
  increaseCount = () => {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  };
  render() {
    return (
      <div>
        현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default MiniCount;
