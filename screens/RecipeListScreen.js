import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HighlightButton from '../components/HighlightButton';
import ToastManager, {Toast} from 'toastify-react-native';

const SEED = [
    {id : '1', category: 1, name: "Pancakes", durationHours: 0, durationMinutes: 20, description: "ppppppppppppppppp"},
    {id : '2', category: 2, name: "Burger", durationHours: 1, durationMinutes: 30, description: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
    {id : '3', category: 3, name: "Lasagne", durationHours: 2, durationMinutes: 0, description: "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"},
    {id : '4', category: 1, name: "Café", durationHours: 0, durationMinutes: 5, description: "ccccccccccccccccc"},
    {id : '5', category: 2, name: "Salade", durationHours: 0, durationMinutes: 15, description: "ssssssssssssssss"},
    {id : '6', category: 3, name: "Poulet", durationHours: 1, durationMinutes: 40, description: "aaaaaaaaaaaaaaaaa"},
    {id : '7', category: 3, name: "Pizza", durationHours: 1, durationMinutes: 10, description: "zzzzzzzzzzzzzzzzzz"},
    {id : '8', category: 1, name: "Vanille française", durationHours: 0, durationMinutes: 8, description: "vvvvvvvvvvvvvvv"},
    {id : '9', category: 2, name: "Wrap", durationHours: 0, durationMinutes: 45, description: "wwwwwwwwwwwwwwwwww"},
    {id : '10', category: 1, name: "oeuf", durationHours: 0, durationMinutes: 10, description: "oooooooooooooooooo"}
  ]


export default function RecipeListScreen({navigation, route}){
  const [recipes, setReceipes] = useState(SEED);

  useEffect(() => {
    const recipe = route.params?.recipe;
    if(recipe != undefined){
      setReceipes([...recipes, recipe])
      Toast.info("Recette ajouté avec succès");
    }
  }, [route.params])

  function handleView() {
    if (recipes.length === 0) {
      Toast.info('Liste vide!');
    } else {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      navigation.navigate('RecipeForm', {recipe: recipes[randomIndex]});
    }
  }

  function handleAdd() {
    navigation.navigate('RecipeForm');
  }


  return(
    <View style = {styles.container}>
      <Text style = { styles.headerText} >List page</Text>
      <Text style = {styles.text}> {JSON.stringify(recipes.sort((r1, r2) => r1.name.localeCompare(r2.name)) )}</Text>
      <HighlightButton label = "View" onPress = {handleView} />
      <HighlightButton label = "Add" onPress = {handleAdd}/>

      <ToastManager/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex : 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: "#387E7F",
  },

  headerText:{
    color : 'white',
    fontSize : 40,
    justifyContent : 'flex-start',
  },

  text: {
    color : 'white',
    alignItems : 'center',
    fontSize : 20,
  },
});