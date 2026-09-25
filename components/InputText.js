import { StyleSheet, TextInput} from 'react-native';

export default function InputText({placeholder}){
  return(
    <TextInput placeholder={placeholder} placeholderTextColor= 'white' style = {styles.form} />
  );
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: 'lightgray',
    color: 'white',
    padding: 10,
    margin: 12,
    width : '100%',
  },
});