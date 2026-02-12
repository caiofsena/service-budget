import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';
import { HomeScreen } from './app/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { BudgetScreen } from './app/screens/Budget';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  const Stack = createStackNavigator();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Budget" component={BudgetScreen} options={{ title: 'Orçamento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}