import React from 'react';

import { Props } from './props/';
import { States } from './state';
import Compo from './component/index';

function App() {
  return (
    <div
      className='App'
      style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Props></Props>
      <States></States>
      <Compo></Compo>
    </div>
  );
}

export default App;
