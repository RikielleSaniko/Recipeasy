import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import HighlightButton from '../components/HighlightButton';
import styles from '../styles/styles';


export default function RecipeScreen(){
  const options = [
    {
      id: '1',
      label: 'Breakfast',
      value: '1',
      labelStyle: {color: 'white'},
      borderColor: 'white'
    },
    {
      id: '2',
      label: 'Lunch',
      value: '2',
      labelStyle: {color: 'white'},
      borderColor: 'white'
    },
    {
      id: '3',
      label: 'Dinner',
      value: '3',
      labelStyle: {color: 'white'},
      borderColor: 'white'
    }
  ];
  return(
    <SafeAreaProvider>
      <SafeAreaView style = {[styles.container, {justifyContent: 'flex-start'}]}>
        <View style = {{alignItems:'center'}}>
          <RadioGroup radioButtons={options} layout='row'/>
          <TextInput placeholder='Name' placeholderTextColor= 'white' style = {[styles.form, {width: 300}]}/>
          <View style={styles.durationContainer}>
          <Text style= {{color: 'white'}}>Duration</Text>
          <Picker style= {styles.durationPicker} dropdownIconColor='white'>
                <Picker.Item label="0 h" value="0" />
            </Picker>
            <Text style= {{color: 'white'}}>:</Text>
            <Picker style= {styles.durationPicker}>
                <Picker.Item label="0 mins" value="0" dropdownIconColor="white"/>
            </Picker>
            </View>
            <TextInput multiline={true} placeholder='Description' placeholderTextColor= 'white' style={styles.textarea}/>
            <HighlightButton label= "Save"/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}