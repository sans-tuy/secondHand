import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './config/Router/router';
import {Provider} from 'react-redux';
import {store} from './config/Redux/store';
import {navigationRef} from './config/Router/rootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
