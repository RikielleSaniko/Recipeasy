import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HighlightButton from '../components/HighlightButton';
import ToastManager, {Toast} from 'toastify-react-native';


export default function RecipeListScreen({navigation, route}){
  const [recipes, setReceipes] = useState([]);

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