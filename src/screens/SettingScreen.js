
import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingScreen = (props) => {
    const {navigation} = props;

    const gotoHome =(page)=>{
        navigation.navigate(page)
    }
  return (
    <View>
      <Text>¡Hola! Bienvenido/a a la pantalla de configuración.</Text> 
      <Text>Por favor, seleccione las opciones que desea configurar para su aplicación.</Text>
      <Button title='Ir a Home' onPress={()=>gotoHome('Home')}/>
    </View>
  );
};


export default SettingScreen;
