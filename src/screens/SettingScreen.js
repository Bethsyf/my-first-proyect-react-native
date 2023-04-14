
import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingScreen = (props) => {
    const {navigation} = props;

    const gotoHome =(page)=>{
        navigation.navigate(page)
    }
  return (
    <View>
      <Text>Esta es la pantalla de configuración</Text>
      <Button title='Ir a Home' onPress={()=>gotoHome('Home')}/>
    </View>
  );
};

// Exportación del componente SettingScreen
export default SettingScreen;
