import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderWithMenu from '../components/headerMenu';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderWithMenu/>
      <Link href='/perfil'>perfil</Link>
      <Link href='/pacientes'>pacientes</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
