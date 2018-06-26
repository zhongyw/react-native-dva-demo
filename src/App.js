import React from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';

import Router from './routes';

import models from './models'
// 禁用屏幕底部的黄色警告
console.disableYellowBox = true;

const dvaApp = create({
    models: models,
    onError(e) {
        console.log('onError', e);
    },
})

if (!global.registered) {
    models.forEach(model => dvaApp.model(model));
}

global.registered = true;
dvaApp.start();

const store = dvaApp._store;

dvaApp.start = (container) => {
    return () => {
        return (
            <Provider store={store}>
                {container}
            </Provider>
        )
    }
}


const App = dvaApp.start(<Router />);

export default App;
