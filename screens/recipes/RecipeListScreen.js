import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ToastManager, {Toast} from 'toastify-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RecipeItem from './RecipeItem';
import recipeService from '../../services/recipes';
import { useFocusEffect } from '@react-navigation/native';

export default function RecipeListScreen({navigation, route}){
  const [recipes, setReceipes] = useState([]);

  const refresh = useCallback(() =>{
    let cancelled = false;

    const asyncRefresh = async () => {
      try {
        const list = await recipeService.list();
        
        if(!cancelled){
          setReceipes(list);
        }
      }
      catch{
        Toast.error("Impossible de charger les recettes");
      }
    };

    asyncRefresh();

    return () => {cancelled = true; }
  }, []);

  useFocusEffect(refresh);

  function handleAdd() {
    navigation.navigate('RecipeForm');
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={recipes}
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
      <TouchableOpacity style={styles.plus} onPress={handleAdd}>
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
      <ToastManager />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#387E7F",
  },

  empty: {
    flex: 1,
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

  plus: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});