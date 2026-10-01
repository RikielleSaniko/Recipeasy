import { StyleSheet, Text, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import HighlightButton from '../components/HighlightButton';
import InputText from '../components/InputText';
import EMPTY_RECIPE from '../model/recipe';


export default function RecipeScreen() {
  const options = [
    { id: '1', label: 'Breakfast', value: '1', labelStyle: { color: 'white' }, borderColor: 'white' },
    { id: '2', label: 'Lunch', value: '2', labelStyle: { color: 'white' }, borderColor: 'white' },
    { id: '3', label: 'Dinner', value: '3', labelStyle: { color: 'white' }, borderColor: 'white' }
  ];

  const hourOptions = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    label: `${i} h`,
    value: i,
  }));

  const minuteOptions = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    label: `${i} mins`,
    value: i,
  }));

  const [recipe, setRecipe] = useState(EMPTY_RECIPE);

  return (
    <View style={styles.recipe_content}>
      <RadioGroup radioButtons={options} layout='row' containerStyle={{justifyContent: "space-between", marginTop: 20}} onPress = {recipe} selectedId = {recipe.category.toString()}/>

      <InputText placeholder='Name' onChangeText={recipe} value = {recipe.name}/>

      <View style={styles.durationContainer}>
        <Text style={{ color: 'white' }}>Duration</Text>

        <Picker
          selectedValue={recipe.durationHours}
          onValueChange={(durationHours) => setRecipe({ ...recipe, durationHours })}
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
          selectedValue={recipe.durationMinutes}
          onValueChange={(durationMinutes) => setDuration({ ...recipe, durationMinutes})}
          style={styles.durationPicker}
          dropdownIconColor='white'
        >
          {minuteOptions.map((option) => {
            const { id, label, value } = option;

            return <Picker.Item key={id} label={label} value={value} />;
          })}
        </Picker>
      </View>

      <InputText
        onChangeText = {recipe}
        value = {recipe.description}
        multiline={true}
        placeholder='Description'
        style={styles.textarea}/>

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
    backgroundColor: "#387E7F",
  },

  textarea: {
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    color: 'white',
    textAlignVertical: 'top',
    placeholderTextColor: 'white',
    height: 500
  },

  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal : 10,
  },

  durationPicker: {
    flex: 1,
    color: 'white',
    padding: 7,
  }
});