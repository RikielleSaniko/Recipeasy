import {TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function HighlightButton({label, onPress, backgroundColor = 'orange'}){
  return(
    <TouchableHighlight style={styles.touchable} onPress = {onPress} underlayColor='white'>
      <View style={[styles.button, {backgroundColor}]}>
        <Text style={{color: 'white'}}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable:{
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    
  },
});