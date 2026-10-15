import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HighlightButton from '../../components/HighlightButton';
import InputText from '../../components/InputText';
import {useState} from 'react';
import AuthService from '../../services/auth';
import UserCredentials from '../../model/user-credentials';
import ToastManager, { Toast } from 'toastify-react-native';


export default function LoginScreen({navigation}){
  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}))

  async function handleLogin(){
    if(credentials.username.trim() === '' || credentials.password.trim() === ''){
      Toast.error("Le nom d'utilisateur et le mot de passe sont requis");
      return;
    }

    try{
      const success = await AuthService.logIn(credentials)
      if (success){
        setCredentials(new UserCredentials({username: '', password: ''}))
        navigation.navigate('RecipeList');
      }
      else{
        Toast.error("Identifiants invalides !");
      }
    }
    catch(e){
      console.log(e.message)
      Toast.error("Erreur de serveur");
    }
  }
  return(
        <View style={styles.container}>
          <InputText 
            placeholder = "Username"
            value = { credentials.username }
            onChangeText = { text => setCredentials(new UserCredentials({...credentials, username: text })) }
          />
          <InputText 
            placeholder = "Password"
            value = { credentials.password }
            onChangeText = { text => setCredentials(new UserCredentials({...credentials, password: text })) }
          />
          <HighlightButton label= "Login" onPress = {handleLogin}/>
          <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
          <Text style = {styles.text}> Sign up! </Text>
          </TouchableOpacity>
          <ToastManager />
        </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: "#387E7F"
  },

  text:{
    color: '#132da0e7',
    marginTop: 30,
  },
});