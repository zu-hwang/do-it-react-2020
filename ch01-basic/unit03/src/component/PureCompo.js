import React from 'react';
import shallowEqual from 'shallow-equal'; // 얕은 비교를 위한 모듈 임포트

// 퓨어컴포넌트 작성하기
export class PureCompo extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  render() {
    // ! ==, ===, shallowEqual()을 활용한 검증비교 알아보기
    const obj = { name: 'park' };
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: 'park' }];
    console.log(mylist == list1); // false
    console.log(shallowEqual(mylist, list1)); // true
    console.log(shallowEqual(mylist, list2)); // false
    return <></>;
  }
}

export default PureCompo;
