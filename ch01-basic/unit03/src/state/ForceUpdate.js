import React from 'react';

//! 포스 업데이트는 리액트 성능에 문제가 야기됨으로 사용하지 않는것이 좋다!
class ForceUpdate extends React.Component {
  constructor(props) {
    super(props);
    // this.state로 관리하지 않고 각 값을 따로 관리
    this.loading = true;
    this.formData = '포스업뎃 초기값';
    this.handleData = this.handleData.bind(this);
  }
  handleData() {
    const data = 'new';
    this.loading = false;
    this.formData = data + this.formData;
    // handleData가 실행될때 각 값을 강제로 업데이트 한다.
    this.forceUpdate();
  }
  componentDidMount() {
    setTimeout(this.handleData, 4000);
  }
  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)} | </span>
        <span>결과 : {this.formData} </span>
      </div>
    );
  }
}

export default ForceUpdate;
