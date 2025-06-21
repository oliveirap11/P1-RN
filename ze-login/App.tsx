import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/logo.png'
import icon from './assets/icon.png'
import bebidas from './assets/bebidas.png'

const App = () => {
  return (
    <LinearGradient colors={['#ffd700', '#daa520',]} style={styles.fundo}>     
    
    <View >
      <View style={styles.navbar}>
        <Image source={logo} style={styles.logo} />
        <Image source={icon} style={styles.icon} />
      </View>
      <View>
        <Image source={bebidas} style={styles.bebidas} />
      </View>       
      <View style={styles.container}>
      <Text style={styles.texto}>
        Entre ou cadastre-se
        </Text>
      <TextInput style={styles.input}>
        <Text >E-mail</Text>
      </TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.ButtonText}>CONTINUAR COM E-MAIL</Text>
      </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}
export default App;
