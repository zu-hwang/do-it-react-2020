import React from 'react';
// Props
import PropsCompo from './PropsCompo';
import PropsCompo2 from './PropsCompo2';
import PropTypeBool from './PropTypeBool';
import PropTypeDefault from './PropTypeDefault';
import PropTypeObj from './PropTypeObj';
import PropTypeChild from './PropTypeChild';

export class Props extends React.Component {
  render() {
    return (
      <div style={{ border: 'solid black 5px', width: '50%', margin: '3px' }}>
        {/* 여기는 props */}
        <h1>01. Props</h1>
        <PropsCompo name='프로퍼티 예제'></PropsCompo>
        <PropsCompo2
          boolValue={true}
          numValue={33}
          arrayValue={[1, 2, 3]}
          objValue={{ name: 'kiwi' }}
          nodeValue='<h1>노드란 태그군요</h1>'
          funcValue={() => {
            console.log('메세지');
          }}></PropsCompo2>
        {/* 불린 타입일 경우 아래와 같이 값을 주지 않고 사용할 수 있다 */}
        <h3>불린일 경우 아래 방식 2가지는 거짓으로 표현된다</h3>
        <p>{'<PropTypeBool boolean={false}></PropTypeBool>'}</p>
        <PropTypeBool boolean={false}></PropTypeBool>
        <p>{'<PropTypeBool></PropTypeBool>'}</p>
        <PropTypeBool></PropTypeBool>
        <h3>불린일 경우 아래 방식 2가지는 참으로 표현된다</h3>
        <p>{'<PropTypeBool boolean={true}></PropTypeBool>'}</p>
        <PropTypeBool boolean={true}></PropTypeBool>
        <p>{'<PropTypeBool boolean></PropTypeBool>'}</p>
        <PropTypeBool boolean></PropTypeBool>
        <PropTypeObj objValue={{ name: 'name', age: 33 }}></PropTypeObj>
        <PropTypeDefault></PropTypeDefault>
        <PropTypeChild>
          <h2 style={{ color: 'greenyellow', backgroundColor: '#999' }}>
            자식노드
          </h2>
        </PropTypeChild>
      </div>
    );
  }
}
