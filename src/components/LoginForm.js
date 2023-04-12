import React from 'react'
import { Text, View, TextInput, Button } from 'react-native';

const LoginForm = () => {
    return (
    <View>
        <Text>Formulario</Text>
        <View>
        <TextInput placeholder='email'/>
        <TextInput placeholder='contraseña'/>
        </View>
        <Button title='Enviar' />
    </View>
  )
}

export default LoginForm
