import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: '초기 상태값',
    };
    // 화살표함수없이 this를 사용한다면 .bind()필수사용해야 this가 가르키는 곳을 확실하게 할 수 있다.
    this.handleData = this.handleData.bind(this);
    // 4초뒤에 this.handleData 함수 실행
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading값', this.state.loading);
  }
  componentDidMount() {
    setTimeout(this.handleData, 4000);
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중 : {String(this.state.loading)} | </span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
