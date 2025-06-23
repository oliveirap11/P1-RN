import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';
import fundo from './assets/Fundo.png';
import logo from './assets/logoTix.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const App = () => {
  return (      
    <View >     
      <ImageBackground source={fundo} style={styles.fundoImg}>
    <View style={styles.usuario}>
       <Icon style={styles.icon} name="account" size={24} color="#fff" />
       <Text style={styles.textoIcon}>Olá, Patrick! </Text>
    </View>
      <View style={styles.logoContainer}>
       <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
         <Text style={styles.textLocalizacao}>TIX Teresópolis - RJ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="shopping-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.textButton}>DELIVERY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="store-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.textButton}>RETIRADA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonShopp}>
        <View style={styles.iconBox}>
          <Icon name="information-outline" size={30} color="#fff" />
          <View style={styles.separator} />
        </View>
        <Text style={styles.textButton}>SOBRE NÓS</Text>
      </TouchableOpacity>
    </View>
     <View style={styles.barra}>
        <TouchableOpacity style={styles.buttonBarra}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBarra}>
          <Icon name="cart" size={24} color="#fff" />
          <Text style={styles.buttonText}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBarra}>
          <Icon name="clipboard-list" size={24} color="#fff" />
          <Text style={styles.buttonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBarra}>
          <Icon name="account" size={24} color="#fff" />
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

    </View>

    
  );
}
export default App;
