import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventScreen from './pages/EventScreen'
import DrawerNavigation from './components/DrawerNavigation';
import CguScreen from './pages/CguScreen';
import ContactScreen from './pages/ContactScreen';
import BandScreen from './pages/BandScreen';
import ProfilScreen from './pages/ProfilScreen';
import NewsContentScreen from './pages/NewsContentScreen';
import NewsScreen from './pages/NewsScreen';
import { Dimensions } from 'react-native';
import MediaScreen from './pages/MediaScreen';
import PhotoScreen from './pages/PhotoScreen';
import VideoScreen from './pages/VideoScreen';
import MusicScreen from './pages/MusicScreen';
import MusicSelectorScreen from './pages/MusicSelectorScreen';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
const { width } = Dimensions.get('window');

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
            headerTitleAlign: 'center',
            contentStyle: { backgroundColor: '#161616' },
            headerTintColor: 'rgba(255,255,255,1)', headerStyle: { backgroundColor: 'rgba(8,8,8,1)' }
          }
          }>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Music"
            component={MusicScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'MUSIQUE',
            }}
          />
          <Stack.Screen
            name="MusicSelector"
            component={MusicSelectorScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'SELECTION',
            }}
          />
          <Stack.Screen
            name="Band"
            component={BandScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'PLASTIC DUCK',
            }}
          />
          <Stack.Screen
            name="Events"
            component={EventScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'ÉVÈNEMENTS',
            }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'CONTACT',
            }}
          />
          <Stack.Screen
            name="Cgu"
            component={CguScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'CONDITIONS GÉNÉRALES D\'UTILISATION',
            }}
          />
          <Stack.Screen
            name="Profil"
            component={ProfilScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'PROFIL',
            }}
          />
          <Stack.Screen
            name="News"
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'ACTUALITÉS',
            }}
            component={NewsScreen}
          />
          <Stack.Screen
            name="NewsContent"
            component={NewsContentScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'ACTUALITÉS',
            }}
          />
          <Stack.Screen
            name="Media"
            component={MediaScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'PHOTOS / VIDEOS',
            }}
          />
          <Stack.Screen
            name="Photo"
            component={PhotoScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'PHOTOS',
            }}
          />
          <Stack.Screen
            name="Video"
            component={VideoScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'VIDEOS',
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'SE CONNECTER',
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTitleStyle: styles.headerTitle,
              title: 'S\'INSCRIRE',
            }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
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
  headerTitle: {
    fontFamily: 'Agency FB Bold',
    fontSize: width * 0.05,
  }
})