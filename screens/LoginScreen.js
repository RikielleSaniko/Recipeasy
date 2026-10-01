import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import { useState } from 'react';
import InputText from '../components/InputText';


export default function LoginScreen({navigation}){
  const [credentials, setCredentials] = useState({username: '', password: ''});
  return(
        <View style={styles.container}>
          <InputText 
              placeholder="Username"
              value={ credentials.username }
              onChangeText={ (text) => setCredentials({...credentials, username: text})}
            />
          <InputText 
            placeholder="Password"
            value={ credentials.password }
            onChangeText={ (text) => setCredentials({...credentials, password: text})}
          />
          <HighlightButton label= "Login" onPress = {() => navigation.navigate('RecipeList')}/>
          <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
          <Text style = {styles.text}> Sign up! </Text>
          </TouchableOpacity>
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