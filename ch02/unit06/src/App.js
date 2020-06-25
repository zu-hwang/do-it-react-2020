import React, { Children } from 'react';
// import HomePageComponent from './components/oldContext/HomePageComponent';
import LoadingProvider from './components/contextAPI/LoadingProvider';
import LoadingConsumer from './components/contextAPI/LoadingConsumer';

import Madal from './components/modal/modal';

function App() {
  return (
    <div className='App'>
      {/* <HomePageComponent></HomePageComponent> */}
      <Madal>????</Madal>
      <LoadingProvider>
        <LoadingConsumer></LoadingConsumer>
      </LoadingProvider>
    </div>
  );
}

export default App;
