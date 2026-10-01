import { StyleSheet, View } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import { useState } from 'react';
import InputText from '../components/InputText';


export default function AccountScreen({navigation}){
  const [account, setAccount] = useState({username: '', password: '', passwordConfirmation: ''});

  return(
      <View style={styles.container}>
         <InputText 
          placeholder="Username"
            value={ account.username }
            onChangeText={ (text) => setAccount({...account, username: text})}
        />
         <InputText 
            placeholder="Password"
            value={ account.password }
            onChangeText={ (text) => setAccount({...account, password: text})}
         />
         <InputText 
         placeholder="Password Confirmation"
            value={ account.passwordConfirmation }
            onChangeText={ (text) => setAccount({...account, passwordConfirmation: text})}
         />
         <HighlightButton label= "Create my account" onPress = {() => navigation.navigate("RecipeList")}/>
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