import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';
import styles from '../styles/styles';


export default function LoginScreen(){
  return(
     <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <View style={{alignItems: 'center'}}>
          <InputText placeholder={"Username"}/>
          <InputText placeholder={"Password"}/>
          <HighlightButton label= "Login"/>
          <Text style = {styles.text}> Sign up! </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}