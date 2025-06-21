import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  fundo: {
    flex:1     
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
    padding: 20,
    marginTop: 30 
    
  },
  logo: {
    width: 65,
    height: 42,
    marginLeft: 150
    
  },
  icon: {
    width: 30,
    height: 30,
    
  },
  bebidas: {
    width: 350,
    height: 280,
    marginTop: 150,
    marginLeft: 20,
  },
  container: {    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    padding: 20,
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#9E9E9E',
    backgroundColor: '#fff',
    
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#9E9E9E',
    fontSize: 15,
    fontWeight: 'bold',
  },
});