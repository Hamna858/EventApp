import * as React from 'react';
import HostVenueSearch from './src/screens/HostVenueSearch';
import OnBoarding from './src/screens/OnBoarding';
import Welcome from './src/screens/Welcome';
import Navigation from './src/screens/Navigation';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function App() {
  return (
    <NavigationContainer>
    <PaperProvider>
       <Navigation/>
    </PaperProvider>
    </NavigationContainer>
    
  );
}



AppRegistry.registerComponent(appName, () => App);


