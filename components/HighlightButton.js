import {TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function HighlightButton({label, onPress, backgroundColor = 'orange'}){
  return(
    <TouchableHighlight style={{alignSelf: 'center'}} onPress = {onPress}>
      <View style={[styles.button, {backgroundColor}]}>
        <Text style={{color: 'white'}}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});