import { View, Text, Button} from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const {navigation} = props;
    
    const gotoPage = () =>{
        navigation.navigate("Setting")
    }
       
  
  return (
    <View>
      <Text>¡Bienvenido a nuestra aplicación!</Text>
      <Text>Aquí encontrarás todo lo que necesitas para mantenerte conectado con tus amigos, familiares y comunidad. Explora nuestras funciones y descubre cómo puedes compartir momentos, enviar mensajes y mucho más.</Text>
      <Text>¡Gracias por usar nuestra app!</Text>      
      <Button title="Ir a Ajustes" onPress={gotoPage} />


    </View>
  )
}