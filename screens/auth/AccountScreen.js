import { StyleSheet, View } from 'react-native';
import HighlightButton from '../../components/HighlightButton';
import InputText from '../../components/InputText';
import {useState} from 'react';
import AuthService from '../../services/auth';
import UserCredentials from '../../model/user-credentials';
import ToastManager, { Toast } from 'toastify-react-native';

export default function AccountScreen({navigation}){
  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}));
  const [confirmation, setConfirmation] = useState('');

  async function handleSignUp(){
    if(credentials.username.trim() === '' || credentials.password.trim() === ''){
      Toast.error("Le nom d'utilisateur et le mot de passe sont requis !");
      return;
    }

    if(credentials.password !== confirmation){
      Toast.error("Les mots de passe sont différents !");
      return;
    }

    try{
      const success = await AuthService.signUp(credentials)

      if(success){
        navigation.navigate('RecipeList')
      }
      else{
        Toast.error("Ce nom d'utilisateur existe déjà !");
      }
    }
    catch{
      Toast.error("Erreur de serveur");
    }
  }

  return(
      <View style={styles.container}>
        <InputText 
          placeholder="Username" 
          value = {credentials.username}
          onChangeText={ text => setCredentials(new UserCredentials({...credentials, username: text })) }
        />
         <InputText 
          placeholder="Password" 
          value={ credentials.password }
          onChangeText={ text => setCredentials(new UserCredentials({...credentials, password: text })) }
        />
         <InputText 
         placeholder="Password Confirmation" 
         value = {confirmation}
         onChangeText={ text => setConfirmation(text) }/>
         <HighlightButton label= "Create my account" onPress = {handleSignUp}/>
         <ToastManager />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: "#387E7F"
  },

});