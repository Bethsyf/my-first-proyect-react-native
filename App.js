import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/loginForm';
import Saludo from './src/components/Saludo'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mi primer proyecto.</Text>
      <LoginForm/>
      <Saludo name='luis'/>
      <Saludo name='sergio'/>
      <Saludo name='gaby'/>
    </View>
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