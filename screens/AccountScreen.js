import { StyleSheet, View } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';


export default function AccountScreen({navigation}){

  return(
      <View style={styles.container}>
         <InputText placeholder="Username"/>
         <InputText placeholder="Password"/>
         <InputText placeholder="Password Confirmation"/>
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