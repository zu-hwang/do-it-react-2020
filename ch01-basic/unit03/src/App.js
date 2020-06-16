import React from 'react';

import { Props } from './props/';
import { States } from './state';
import Compo from './component/index';
import RefScrollSpy from './component/RefScrollSpy';

function App() {
  return (
    <div
      className='App'
      style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Props></Props>
      <States></States>
      <Compo></Compo>
      <RefScrollSpy></RefScrollSpy>
    </div>
  );
}

export default App;
