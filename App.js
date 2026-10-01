import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import RecipeScreen from './screens/RecipeScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
     
        <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E07A5F'
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="Login" component={ LoginScreen } options = {{headerBackVisible: false}}/>
        <Stack.Screen name="SignUp" component={ AccountScreen } />
        <Stack.Screen name="RecipeForm" component={ RecipeScreen } />
        <Stack.Screen 
          name="RecipeList" 
          component={ RecipeListScreen }  
          options={({ navigation }) => ({
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'white', marginRight: 8 }}>Log out</Text>
              </TouchableOpacity>
            )
          })}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
