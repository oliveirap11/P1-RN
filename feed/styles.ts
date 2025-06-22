import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 80,
    backgroundColor: '#ff0000',
    
    
  },
  fundoImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    width: 30,
    height: 30,
    top: 20,
    left: 10,
    
  },
  textoIcon: {
    position: 'absolute',
    color: '#fff',
    fontSize: 15,
    top: 50,
    left: 45,
  },

});