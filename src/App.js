import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './config/Router/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
