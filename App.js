import * as React from 'react';
import Navigation from './src/screens/Navigation';
import Tabs from './src/screens/Tabs';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/screens/MainNavigation';
import { initializeApp } from '@firebase/app';
import '@react-native-firebase/database';

export default function App() {
  return (
    <PaperProvider>
      <Navigation/>
    </PaperProvider>
    
  );
}


AppRegistry.registerComponent(appName, () => App);