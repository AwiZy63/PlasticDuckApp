import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventScreen from './pages/EventScreen'
import DrawerNavigation from './components/DrawerNavigation';
import CguScreen from './pages/CguScreen';
import ContactScreen from './pages/ContactScreen';
import BandScreen from './pages/BandScreen';
import MusicSelector from './pages/MusicSelector';
import ProfilScreen from './pages/ProfilScreen';
import NewsContentScreen from './pages/NewsContentScreen';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  let [fontsLoaded] = useFonts({
    'Agency FB': require('./assets/fonts/AgencyFB.ttf'),
    'Agency FB Bold': require('./assets/fonts/AgencyFBBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator

          screenOptions={{ 
            contentStyle: { backgroundColor: '#161616' } ,
            headerTintColor: 'rgba(255,255,255,1)', headerStyle: { backgroundColor: 'rgba(8,8,8,1)' }
          }
          }>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MusicSelector" component={MusicSelector} />
          <Stack.Screen name="Band" component={BandScreen} />
          <Stack.Screen name="Events" component={EventScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Cgu" component={CguScreen} />
          <Stack.Screen name="Profil" component={ProfilScreen} />
          <Stack.Screen
            name="NewsContent"
            component={NewsContentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})