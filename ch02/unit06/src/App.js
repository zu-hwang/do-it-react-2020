import React from 'react';
// import HomePageComponent from './components/oldContext/HomePageComponent';
import LoadingProvider from './components/contextAPI/LoadingProvider';
import LoadingConsumer from './components/contextAPI/LoadingConsumer';

function App() {
  return (
    <div className='App'>
      {/* <HomePageComponent></HomePageComponent> */}
      <LoadingProvider>
        <LoadingConsumer></LoadingConsumer>
      </LoadingProvider>
    </div>
  );
}

export default App;
