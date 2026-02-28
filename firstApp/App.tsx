import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'green', fontSize: 20, backgroundColor: 'lightgreen', padding: 10, borderRadius: 15}}>Bem-Vindo</Text>
      <Text style={{color: 'blue', fontSize: 20, backgroundColor: 'lightblue', padding: 10, borderRadius: 50}}>Ao meu primeiro App</Text>
      <Text style={{color: 'red', fontSize: 20, backgroundColor: 'lightcoral', padding: 10, borderRadius: 20}}>Espero que você goste!</Text>
      <Text style={{color: 'purple', fontSize: 20, backgroundColor: 'lavender', padding: 10, borderRadius: 35}}>Vamos aprender juntos!</Text>
      <StatusBar style="auto"/>
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
  card1: {
    color: 'green',
    fontSize: 30,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 10
  },
});
