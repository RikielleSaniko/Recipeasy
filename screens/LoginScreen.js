import { StyleSheet, Text, View } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';


export default function LoginScreen(){
  return(
        <View style={styles.container}>
          <InputText placeholder="Username"/>
          <InputText placeholder={"Password"}/>
          <HighlightButton label= "Login"/>
          <Text style = {styles.text}> Sign up! </Text>
        </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  text:{
    color: '#132da0e7',
    marginTop: 30,
  },
});