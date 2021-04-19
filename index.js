import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';


const store = createStore(rootReducers, applyMiddleware(thunk));

const AppCon = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}



AppRegistry.registerComponent(appName, () => AppCon);