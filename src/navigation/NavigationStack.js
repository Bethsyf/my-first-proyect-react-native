import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'

const Stack = createStackNavigator()

export default function NavigationStack() {
  
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Stack.Navigator>
  )
}
