import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'green', fontSize: 20}}>Bem-Vindo</Text>
      <Text style={{color: 'blue', fontSize: 20}}>Ao meu primeiro App</Text>
      <Text style={{color: 'red', fontSize: 20}}>Espero que você goste!</Text>
      <Text style={{color: 'purple', fontSize: 20}}>Vamos aprender juntos!</Text>
      <StatusBar style="dark" />
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
