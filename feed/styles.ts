import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  fundoImg: {
    width: '100%',
    height: '100%',
    paddingBottom: 45,   
  },
  usuario: {        
    height: 80,
    backgroundColor: '#f9133c',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 8,       
  },  
  
  icon: {
    flexDirection: 'row',
    alignItems: 'center',    
            
  },
  textoIcon: {
    position: 'absolute',
    color: '#fff',
    fontSize: 15,
    top: 48,
    left: 35,
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
  textLocalizacao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
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
  textButton: {
    color: '#fff',    
    fontSize: 16,    
  },
   barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9133c',
    paddingVertical: 10,
    paddingBottom: 15,
    marginTop: 220,
  },
  buttonBarra: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },

});