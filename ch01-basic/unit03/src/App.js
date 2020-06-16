import React from 'react';
// Props
import PropsCompo from './props/PropsCompo';
import PropsCompo2 from './props/PropsCompo2';
import PropTypeBool from './props/PropTypeBool';
import PropTypeDefault from './props/PropTypeDefault';
import PropTypeObj from './props/PropTypeObj';
import PropTypeChild from './props/PropTypeChild';
// State
import StateExample from './state/StateExample';
import ForceUpdate from './state/ForceUpdate';
import Lifecycle from './state/Lifecycle';

function App() {
  return (
    <div
      className='App'
      style={{ display: 'flex', justifyContent: 'flex-start' }}>
      {/* 여기는 props */}
      <div style={{ border: 'solid black 5px', width: '50%', margin: '3px' }}>
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
        <h1>불린일 경우 아래 방식 2가지는 거짓으로 표현된다</h1>
        <p>{'<PropTypeBool boolean={false}></PropTypeBool>'}</p>
        <PropTypeBool boolean={false}></PropTypeBool>
        <p>{'<PropTypeBool></PropTypeBool>'}</p>
        <PropTypeBool></PropTypeBool>
        <h1>불린일 경우 아래 방식 2가지는 참으로 표현된다</h1>
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
      {/* 여기는 state */}
      <div
        style={{
          border: 'solid black 5px',
          width: '50%',
          margin: '3px',
        }}>
        <StateExample></StateExample>
        <ForceUpdate></ForceUpdate>
        <Lifecycle></Lifecycle>
      </div>
    </div>
  );
}

export default App;
