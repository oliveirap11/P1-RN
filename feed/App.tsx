import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';
import fundo from './assets/Fundo.png';
import icon from './assets/icon.png'



const App = () => {
  return (      
    <View >     
      <ImageBackground source={fundo} style={styles.fundoImg}>
    <View style={styles.perfil}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.textoIcon}>Olá, Patrick! </Text>

      
    </View>
    </ImageBackground>

    </View>

    
  );
}
export default App;
