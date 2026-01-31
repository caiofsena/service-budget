import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';
import { HomeScreen } from './app/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <HomeScreen />
  );
}