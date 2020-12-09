import React from 'react';
import {Provider} from 'react-redux';
import HomeComponent from './src/components/home';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <HomeComponent />
      </Provider>
    </>
  );
};

export default App;
