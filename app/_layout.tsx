import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';

// Import des pages
import Accueil from './index'; // Accueil = profil utilisateur
import Sucre from './menu/sucre'; // Ajout taux de sucre
import TraitementScreen from './menu/traitement'; // 📌 assure-toi que le chemin est correct
import Stats from './menu/stats'; // Statistiques
import PlatsScreen from './menu/plats'; // Suggestions de plats
import NutritionnisteScreen from './menu/nutritionniste'; // Page nutritionniste
import MedecinScreen from './menu/medecin'; // Page médecin


const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="index">
      <Drawer.Screen
        name="index"
        options={{ title: 'Accueil' }}
        component={Accueil}
      />
      <Drawer.Screen
        name="menu/sucre"
        options={{ title: 'Ajouter un taux de sucre' }}
        component={Sucre}
      />
      <Drawer.Screen
      name="menu/traitement"
      options={{ title: 'Traitement' }}
      component={TraitementScreen}
        />
      <Drawer.Screen
        name="menu/stats"
        options={{ title: 'Statistiques' }}
        component={Stats}
      />
      <Drawer.Screen
        name="menu/plats"
        options={{ title: 'Suggestions de plats' }}
        component={PlatsScreen}
      />
      <Drawer.Screen
        name="menu/nutritionniste"
        options={{ title: 'Nutritionniste' }}
        component={NutritionnisteScreen}
      />
      <Drawer.Screen
        name="menu/medecin"
        options={{ title: 'Médecin' }}
        component={MedecinScreen}
      />
    </Drawer.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <AppDrawer />
    </ThemeProvider>
  );
}
