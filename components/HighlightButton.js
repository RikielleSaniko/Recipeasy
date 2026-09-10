import { Button, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/styles';

export default function HighlightButton({label}){
  return(
    <TouchableHighlight>
            <View style={styles.button}>
              <Text style={{color: 'white'}}>{label}</Text>
            </View>
          </TouchableHighlight>
  );
}