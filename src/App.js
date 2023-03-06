import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRouters from './routes/PageRouters';
import AuthRouters from './routes/AuthRouters';
import AppC from './constants/AppC';

export default function App() {
  const {isLogin,setLogin} = AppC();
  return (
    <NavigationContainer>
      {isLogin ? <AppRouters /> : <AuthRouters />}
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

const mytextStyle = StyleSheet.create({
  cobadata: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    
  }
});
