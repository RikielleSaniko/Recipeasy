import { StyleSheet, TextInput} from 'react-native';

export default function InputText({style, ...otherProps}){
  return(
    <TextInput 
      placeholderTextColor= 'white' 
      style = {[styles.form, style]}
      {...otherProps}
    />
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
    width: "90%"
  },
});