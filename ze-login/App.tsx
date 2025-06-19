import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#ffff00', '#ffd700',]} style={styles.container}>
    
    <View >
      <Text>Olá mundo</Text>
    </View>
    </LinearGradient>
  );
}
export default App;
