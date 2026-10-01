import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HighlightButton from '../components/HighlightButton';

export default function RecipeListScreen({navigation}){
  const [recipes, setReceipes] = useState([]);

  function handleView() {
    if (recipes.length === 0) {
      console.log('Liste vide, rien à voir');
    } else {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      navigation.navigate('RecipeForm', recipes[randomIndex]);
    }
  }

  function handleAdd() {
    navigation.navigate('RecipeForm');
  }


  return(
    <View style = {styles.container}>
      <Text>{JSON.stringify(recipes)}</Text>
      <HighlightButton label = "View" onPress = {handleView} />
      <HighlightButton label = "Add" onPress = {handleAdd}/>
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

  text:{
    color: 'white',
    marginTop: 16 ,
  },
});