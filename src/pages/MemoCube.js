import React from 'react';
import MemoryApp from '../Components/MemoCubeComponents/MemoryApp';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';


import '../styles/styles.scss';



const store = configureStore();


const state = store.getState();
console.log(state);


const MemoCube = () => {
    return (
            <Provider store = {store}>
                <MemoryApp/>
            </Provider>
        )
}

export default MemoCube;
