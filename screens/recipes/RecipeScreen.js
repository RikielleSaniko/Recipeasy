import { StyleSheet, Text, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import HighlightButton from '../../components/HighlightButton';
import InputText from '../../components/InputText';
import EMPTY_RECIPE from '../../model/recipe';
import ToastManager, {Toast} from 'toastify-react-native';
import RecipeService from '../../services/recipes';

export default function RecipeScreen({navigation, route}) {

  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  const categoryOptions = categories.map((label, index) => ({
    id: index + 1,
    label,
    labelStyle: {color: 'white'},
    borderColor: 'white'
  }));
  
  const hourOptions = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    label: `${i} h`,
    value: i,
  }));

  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    label: `${i} mins`,
    value: i,
  }));

  const [recipe, setRecipe] = useState(EMPTY_RECIPE);

  useEffect(() =>{
    const recipeParam = route.params?.recipe
    if(recipeParam != undefined){
      setRecipe(recipeParam);

    }
  }, [route.params?.recipe])

  const ajout = route.params?.recipe == undefined;

  async function handleSave(){

    let errors = ""

    if(recipe.name.trim()== ""){
      errors += "Le nom est requis!\n"
    }

    if(recipe.category == null){
      errors += "La catégorie est requise!\n"
    }

    if(recipe.durationHours == 0 && recipe.durationMinutes == 0){
      errors += "La durée doit être > 0"
    }

    if(errors !== ""){
      Toast.info(errors);
      return;
    }

  try {
    if(ajout){
      await RecipeService.create(recipe);
    }
    else{
      await RecipeService.update(recipe);
    }
    navigation.popTo('RecipeList');
  }
  catch{
    Toast.error("Impossible d'enregistrer la recette");
  }
  }

  async function handleDelete(){
    try {
      await RecipeService.remove(recipe);
      navigation.popTo('RecipeList');
    }
    catch{
      Toast.error("Impossible de supprimer la recette");
    }
  }

  return (
    <View style={styles.recipe_content}>
      <RadioGroup radioButtons={categoryOptions} layout='row' containerStyle={{justifyContent: "space-between", marginTop: 20}} onPress ={(category) => setRecipe({ ...recipe, category })} selectedId = {recipe.category}/>

      <InputText placeholder='Name' onChangeText={(name) => setRecipe({ ...recipe, name })} value = {recipe.name}/>

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
          onValueChange={(durationMinutes) => setRecipe({ ...recipe, durationMinutes})}
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
        onChangeText = {(description) => setRecipe({ ...recipe, description })}
        value = {recipe.description}
        multiline={true}
        placeholder='Description'
        style={styles.textarea}
      />

      <View style={styles.button}>
        <HighlightButton label="Save" onPress={handleSave} />
      { !ajout && (
        <HighlightButton label="Delete" backgroundColor='red' onPress={handleDelete} />
      )}
      </View>

    <ToastManager/>
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
  },

  button: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center'
  },
});