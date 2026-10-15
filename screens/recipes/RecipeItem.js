import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const CATEGORIES = {
  1: {icon: 'free-breakfast', color: 'orange'},
  2: {icon: 'lunch-dining', color: 'lime'},
  3: {icon: 'dinner-dining', color: 'blue'},
};

function durationFormat(hours, minutes) {
  return `${hours}h${String(minutes).padStart(2, '0')}`;
}

export default function RecipeItem({recipe, onPress}){
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
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          <Text style={styles.description} numberOfLines={1}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
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

