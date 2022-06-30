import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './config/Router/router';
import {Provider} from 'react-redux';
import {store} from './config/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
