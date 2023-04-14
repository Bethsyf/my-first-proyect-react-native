import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const {navigation} = props;
    
    const gotoPage = () =>{
        navigation.navigate("Setting")
    }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={gotoPage} />

    </View>
  )
}