import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Start from './screens/start/start'
import Select from './screens/select/select'
import Ad from './screens/ad/ad'
import Recipes from './screens/recipes/recipes'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Stack = createStackNavigator()

export default function App() {
  console.log('reload')
  console.disableYellowBox = true
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Ad" component={Ad} />
        <Stack.Screen name="Recipes" component={Recipes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
