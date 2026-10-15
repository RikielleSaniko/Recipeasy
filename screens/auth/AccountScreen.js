import { StyleSheet, View } from 'react-native';
import HighlightButton from '../../components/HighlightButton';
import InputText from '../../components/InputText';
import AuthService from '../../services/auth';
import UserCredentials from '../../model/user-credentials';

export default function AccountScreen({navigation}){

  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}))
  const authService = new AuthService()

  const [pass1, setPass1] = ''
  const [pass2, setPass2] = ''

  function handleCreate(){

    if (pass1 == pass2){
      setCredentials(new UserCredentials({...credentials, password: pass1 })) 
    }

    authService.signUp(credentials)
  }

  return(
      <View style={styles.container}>
         <InputText placeholder="Username" onChangeText={ text => setCredentials(new UserCredentials({...credentials, username: text })) }/>
         <InputText placeholder="Password" onChangeText={ text => setPass1(text) }/>
         <InputText placeholder="Password Confirmation" onChangeText={ text => setPass2(text) }/>
         <HighlightButton label= "Create my account" onPress = {() => handleCreate}/>
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