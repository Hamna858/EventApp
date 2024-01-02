import * as React from 'react';
import Navigation from './src/screens/Navigation';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';



export default function App() {
  return (
    <PaperProvider>
       <Navigation/>
    </PaperProvider>
    
  );
}



AppRegistry.registerComponent(appName, () => App);


