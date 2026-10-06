import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import HighlightButton from '../components/HighlightButton';
import ToastManager, {Toast} from 'toastify-react-native';
import { MaterialIcons } from '@expo/vector-icons';

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

  const CATEGORIES = {
    1: {icon: 'free-breakfast', color: 'orange'},
    2: {icon: 'lunch-dining', color: 'lime'},
    3: {icon: 'dinner-dining', color: 'blue'},
  };


  function durationFormat(hours, minutes){
  return `${hours}h${String(minutes).padStart(2, '0')}`;
}

function RecipeItem({recipe, onPress}){
  const {category, name, durationHours, durationMinutes, description} = recipe;
  const {icon, color} = CATEGORIES[category];

  return(
    <TouchableHighlight onPress={onPress} underlayColor="lightgray">
      <View style={styles.item}>
        <View style={styles.left}>
          <MaterialIcons name={icon} size={25} color={color}/>
          <Text style={styles.duration}>{durationFormat(durationHours, durationMinutes)}</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} numberOfLines={1}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}


export default function RecipeListScreen({navigation, route}){
  const [recipes, setReceipes] = useState(SEED);

  useEffect(() => {
    const recipe = route.params?.recipe;
    if(recipe != undefined){
      setReceipes([...recipes, recipe])
      Toast.info("Recette ajouté avec succès");
    }
  }, [route.params])

  function handleAdd() {
    navigation.navigate('RecipeForm');
  }

  const sortedRecipes = [...recipes].sort((r1, r2) => r1.name.localeCompare(r2.name));

  return(
    <View style = {styles.container}>
      <FlatList
        data={sortedRecipes}
        renderItem={({item}) => (
          <RecipeItem 
            recipe={item}
            onPress={() => navigation.navigate('RecipeForm', {recipe: item})}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.textEmpty}>No recipes yet...</Text>
          </View>
        )}
        contentContainerStyle={{flexGrow: 1}}
      />
      <HighlightButton label = "Add" onPress = {handleAdd}/>

      <ToastManager/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex : 1,
    width: '100%',
    backgroundColor: "#387E7F",
  },

  item: {
    flexDirection : 'row',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },

  empty: {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },

  textEmpty: {
    color: 'lightgray',
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },

  left: {
    alignItems: 'center',
    width: 48,
  },

  right: {
    flex: 1,
  },

  name: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
},

description: {
  color: 'lightgray',
  fontSize: 15,
},

duration: {
    color: 'lightgray',
    fontWeight: 'bold',
    fontSize: 15,
  },


});