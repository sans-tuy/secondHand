import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './config/Router/router';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import {store} from './config/Redux/store';
import {navigationRef} from './config/Router/rootNavigation';
let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default CodePush(codePushOptions)(App);
