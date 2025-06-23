import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';
import fundo from './assets/Fundo.png';
import icon from './assets/icon.png'
import logo from './assets/logoTix.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const App = () => {
  return (      
    <View >     
      <ImageBackground source={fundo} style={styles.fundoImg}>
    <View style={styles.perfil}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.textoIcon}>Olá, Patrick! </Text>
      </View>
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.ButtonText}>TIX Teresópolis - RJ</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="shopping-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.buttonText}>DELIVERY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="store-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.buttonText}>RETIRADA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="information-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.buttonText}>SOBRE NÓS</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>

    </View>

    
  );
}
export default App;
