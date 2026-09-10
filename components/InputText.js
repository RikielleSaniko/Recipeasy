import { StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/styles';

export default function InputText({placeholder}){
  return(
    <TextInput placeholder={placeholder} placeholderTextColor= 'white' style = {styles.form} />
  );
}