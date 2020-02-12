import React from 'react';
import { Provider } from 'react-redux';
import MemoryApp from '../Components/MemoCubeComponents/MemoryApp';
import configureStore from '../store/configureStore';


import '../styles/styles.scss';


const store = configureStore();


const state = store.getState();
console.log(state);


const MemoCube = () => (
  <Provider store={store}>
    <MemoryApp />
  </Provider>
);

export default MemoCube;
