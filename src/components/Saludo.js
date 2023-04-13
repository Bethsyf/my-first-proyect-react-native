import React from 'react'
import {View, Text} from 'react-native'

const Saludo = (props) => {
  const { firstname, lastname } = props;
  return (
    <View>
        <Text>hola {firstname} {lastname} ¿como estas?</Text>
    </View>
  )
}

Saludo.defaultProps = {
  firstname: "bethsy",
  lastname: "falcon",
}


export default Saludo
