import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';
import { HomeScreen } from './app/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { BudgetScreen } from './app/screens/Budget';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen } from './app/screens/Detail';

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
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Orçamento #12345' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}