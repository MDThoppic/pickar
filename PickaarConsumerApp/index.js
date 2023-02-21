import { registerRootComponent } from 'expo';

import App from './App';
import React from 'react';
// import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './app/store/store';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// AppRegistry.registerComponent('main', () => Root);
registerRootComponent(Root);

