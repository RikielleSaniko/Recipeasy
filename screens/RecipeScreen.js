import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';


export default function RecipeScreen() {
  const options = [
    { id: '1', label: 'Breakfast', value: '1', labelStyle: { color: 'white' }, borderColor: 'white' },
    { id: '2', label: 'Lunch', value: '2', labelStyle: { color: 'white' }, borderColor: 'white' },
    { id: '3', label: 'Dinner', value: '3', labelStyle: { color: 'white' }, borderColor: 'white' }
  ];

  const hourOptions = [
    { id: '0', label: '0 h', value: '0' },
    { id: '1', label: '1 h', value: '1' },
    { id: '2', label: '2 h', value: '2' },
  ];

  const minuteOptions = [
    { id: '0', label: '0 mins', value: '0' },
    { id: '15', label: '15 mins', value: '15' },
    { id: '30', label: '30 mins', value: '30' },
    { id: '45', label: '45 mins', value: '45' },
  ];

  const [duration, setDuration] = useState({ hours: '0', minutes: '0' });

  return (
    <View style={styles.recipe_content}>
      <RadioGroup radioButtons={options} layout='row' />

      <InputText placeholder='Name' />

      <View style={styles.durationContainer}>
        <Text style={{ color: 'white' }}>Duration</Text>

        <Picker
          selectedValue={duration.hours}
          onValueChange={(value) => setDuration({ ...duration, hours: value })}
          style={styles.durationPicker}
          dropdownIconColor='white'
        >

          {hourOptions.map((option) => {
            const { id, label, value } = option;

            return <Picker.Item key={id} label={label} value={value} />;
          })}
        </Picker>

        <Text style={{ color: 'white' }}>:</Text>

        <Picker
          selectedValue={duration.minutes}
          onValueChange={(value) => setDuration({ ...duration, minutes: value })}
          style={styles.durationPicker}
          dropdownIconColor='white'
        >
          {minuteOptions.map((option) => {
            const { id, label, value } = option;

            return <Picker.Item key={id} label={label} value={value} />;
          })}
        </Picker>
      </View>

      <TextInput
        multiline={true}
        placeholder='Description'
        placeholderTextColor='white'
        style={styles.textarea}
      />

      <HighlightButton label="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  recipe_content: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    width: '100%',
  },

  textarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    width: '100%',
    color: 'white',
    textAlignVertical: 'top',
    placeholderTextColor: 'white',
  },

  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  durationPicker: {
    flex: 1,
    color: 'white',
    padding: 7,
  }
});