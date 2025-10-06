/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import ReduxProvider from './src/redux/store/ReduxProvider';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ReduxProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigationContainer />
      </SafeAreaProvider>
    </ReduxProvider>
  );
}

export default App;
