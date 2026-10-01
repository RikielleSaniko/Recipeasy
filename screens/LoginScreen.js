import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';


export default function LoginScreen({navigation}){
  return(
        <View style={styles.container}>
          <InputText placeholder="Username"/>
          <InputText placeholder="Password"/>
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