// Inside MainScreen.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';
import Tabs from './Tabs';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Navigation" component={Navigation} />
      <Tab.Screen name="Tabs" component={Tabs} />
    </Tab.Navigator>
  );
}
