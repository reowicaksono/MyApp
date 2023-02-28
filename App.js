import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Just Do it</Text>
      <StatusBar style="auto" />
      <Text style={mytextStyle.cobadata}>Sample my ay</Text>
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

const mytextStyle = StyleSheet.create({
  cobadata: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    
  }
});
