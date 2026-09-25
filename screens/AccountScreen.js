import { StyleSheet, View } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';


export default function AccountScreen(){
  return(
      <View style={styles.container}>
         <InputText placeholder={"Username"}/>
         <InputText placeholder={"Password"}/>
         <InputText placeholder={"Password Confirmation"}/>
         <HighlightButton label= "Create my account"/>
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

});