import {TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function HighlightButton({label, onPress}){
  return(
    <TouchableHighlight style={{alignSelf: 'center'}} onPress = {onPress}>
      <View style={styles.button}>
        <Text style={{color: 'white'}}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});