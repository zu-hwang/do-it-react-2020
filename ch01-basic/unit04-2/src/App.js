import React from 'react';
import Input from './components/InputWithStyle';
import InputWithStyledComponent from './components/InputWithStyledComponent'; // 추가할
import './sass/materialize.scss';

function App() {
  return (
    <div className='App'>
      <nav>
        <div className='nav-wrapper'>
          <div>두잇! 리액트 시작하기</div>
        </div>
      </nav>
      <Input></Input>
      <InputWithStyledComponent></InputWithStyledComponent>
      <h1>메터리얼 css</h1>
    </div>
  );
}

export default App;
