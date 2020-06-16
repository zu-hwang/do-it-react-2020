import React from 'react';
import PTypes from 'prop-types';

class PropsCompo2 extends React.Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;
    return (
      <>
        <p style={{ display: boolValue ? 'block' : 'none' }}>
          불리언 : 참이라서 지금 보여, false면 안보여
        </p>
        <p>숫자값 : {numValue}</p>
        <p>배열의 index 길이는? : {arrayValue.length}</p>
        <p>객체 name인 속성값 : {objValue.name}</p>
        <p>노드 추가여 : {nodeValue}</p>
        <p onClick={funcValue}>함수, 콘솔로그 출력 콘솔 확인하기 !</p>
      </>
    );
  }
}

PropsCompo2.propTypes = {
  boolValue: PTypes.bool,
  numValue: PTypes.number,
  arrayValue: PTypes.arrayOf(PTypes.number),
  objValue: PTypes.object,
  nodeValue: PTypes.node,
  funcValue: PTypes.func,
};

export default PropsCompo2;
