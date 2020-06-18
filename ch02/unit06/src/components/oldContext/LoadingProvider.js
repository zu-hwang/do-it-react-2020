import React from 'react';
import PTypes from 'prop-types';

// 프로바이더 = 공급자 컨포넌트를 따로 분리하여 사용하는 것이 좋다.
class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  // 전달할 컨텍스트를 getChildContext()에 반환값으로 객체에 담는다.
  getChildContext = () => {
    return { loading: this.state.loading, setLoading: this.setLoading };
  };

  // 스토어의 값을 변경할 함수
  // setLoading = (loading) => {
  //   this.setState({ loading }, () => {
  //     console.log('버튼클릭', this.state.loading);
  //   });
  // };
  setLoading = () => {
    this.setState(
      { loading: !this.state.loading },
      console.log('버튼클릭', this.state.loading)
    );
  };

  render() {
    return this.props.children; // 자식노드를 출력한다.
  }
}

LoadingProvider.childContextTypes = {
  loading: PTypes.bool,
  setLoading: PTypes.func,
};

export default LoadingProvider;
