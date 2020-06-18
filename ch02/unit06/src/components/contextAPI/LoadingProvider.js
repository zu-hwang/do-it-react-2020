/**
 * 프로바이더 구현하기
 */

import React from 'react';
// createContext()를 통한 공급자/소비자 생성
const { Provider, Consumer } = React.createContext({});

export { Consumer }; // 소비자 내보내기

// contextAPI는 클래스형으로 만들어야 한다.
export default class LoadingProvider extends React.Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  setLoading = (key, value) => {
    // key는 state이름, value는 새로운 state 값이 된다.
    const newState = { [key]: value };
    this.setState(newState, () => {
      console.log('버튼클릭', this.state[key]);
    });
  };
  render() {
    // 프로바이더의 모든 state와 state변경 함수를 포함하여 context 변수에 담았다.
    const context = {
      // 일일이 담아도 되고, 전개연산자로 편하게 담아도 되고!
      ...this.state,
      setLoading: this.setLoading,
    };
    return (
      // Provider에게 value props로 context를 전달하였다.
      <Provider value={context}>
        {/* 프로바이더로 감싸고 안으로 들어갈 컴포넌트는 children으로 받는다 */}
        {this.props.children}
      </Provider>
    );
  }
}
