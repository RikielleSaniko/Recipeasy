import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import RecipeScreen from './screens/RecipeScreen';
import { StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
         { /*<LoginScreen/>*/ }
        { /*<AccountScreen/> */}
        { /*<RecipeScreen/>*/ }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});