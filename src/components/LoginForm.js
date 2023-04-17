import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const LoginForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
  }

  return (
    <View>
      <Text>Formulario</Text>
      <View>
        <TextInput 
         placeholder='email'
         textContentType='emailAddress'
         keyboardType='email-address'
         required
        />
        <TextInput 
         placeholder='contraseña'
         textContentType='password'
         keyboardType='numeric'
         required
        />
      </View>
      <Button title='Enviar' onPress={handleSubmit} />
      {formSubmitted && <Text>¡Formulario enviado con éxito!</Text>}
    </View>
  )
}

export default LoginForm;
