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
    paddingBottom: 45,   
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
  logoContainer: {    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 120,
  },
  logo: {
    width: 220,
    height: 220,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'rgba(255, 45, 85, 0.9)',
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    marginTop: 250,
    alignItems: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  containerButton: {    
    justifyContent: 'center',
    alignItems: 'center', 
    gap: 20,
    marginTop: 20,   
  },
  buttonShopp: {
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor: 'rgba(255, 45, 85, 0.9)',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,    
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',    
    fontSize: 16,    
  },

});