import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import RecipeScreen from './screens/RecipeScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import { StyleSheet, View } from 'react-native';

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
        <Stack.Screen name="Login" component={ LoginScreen }/>
        <Stack.Screen name="SignUp" component={ AccountScreen } />
        <Stack.Screen name="RecipeForm" component={ RecipeScreen } />
        <Stack.Screen name="RecipeList" component={ RecipeListScreen }  options={{headerBackVisible: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    width: '100%',
    maxWidth: 500,
    padding : 16,
  },
  content: {
    flex: 1,
    width: '100%',
  },
});