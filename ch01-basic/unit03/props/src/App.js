import React from 'react';
import PropsCompo from './components/PropsCompo';
import PropsCompo2 from './components/PropsCompo2';
import PropTypeBool from './components/PropTypeBool';
import PropTypeDefault from './components/PropTypeDefault';
import PropTypeObj from './components/PropTypeObj';
import PropTypeChild from './components/PropTypeChild';

import './App.css';

function App() {
  return (
    <div className='App'>
      <PropsCompo name='자! 시작해보자!'></PropsCompo>
      <PropsCompo2
        boolValue={true}
        numValue={33}
        arrayValue={[1, 2, 3]}
        objValue={{ name: 'kiwi' }}
        nodeValue={<h1>노드란 태그군요</h1>}
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
      <PropTypeObj objValue></PropTypeObj>
      <PropTypeDefault></PropTypeDefault>
      <PropTypeChild>
        <h2 style={{ color: 'greenyellow', backgroundColor: '#999' }}>
          자식노드
        </h2>
      </PropTypeChild>
    </div>
  );
}

export default App;
