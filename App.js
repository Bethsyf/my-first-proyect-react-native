import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludo from './src/components/Saludo'

import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTap from './src/navigation/NavigationTab'

import NavigationDrawer from './src/navigation/NavigationDrawer'

export default function App() {
  return (
    <NavigationContainer>
   
    {/* <View style={styles.container}>
      <Text>"Mi primera aplicación móvil con React Native.</Text>
      <LoginForm/>
      <Saludo firstname='Gaby' lastname='Rendon' />
      <Saludo firstname='Sergio' lastname='rendon'/>
      <Saludo firstname='Mary' lastname='Lopez'/> 
      <Saludo/>
    </View> */}
   
    <NavigationStack/>
     {/* <NavigationTap/> */}
    {/* <NavigationDrawer/>  */}
  </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
