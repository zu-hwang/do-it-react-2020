import React from 'react';

import { Props } from './props/';
import { States } from './state';
import Compo from './component/index';
import RefScrollSpy from './component/RefScrollSpy';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>unit 03</h1>
      <RefScrollSpy style={{ textAlign: 'center' }}></RefScrollSpy>
      <div
        className='App'
        style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Props></Props>
        <States></States>
        <Compo></Compo>
      </div>
    </>
  );
}

export default App;
