import React from 'react'
import {View, Text} from 'react-native'

const Saludo = ({name}) => {
  return (
    <View>
        <Text>hola {name} ¿como estas?</Text>
    </View>
  )
}

export default Saludo
