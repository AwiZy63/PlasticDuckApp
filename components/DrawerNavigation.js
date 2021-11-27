import React, { useState } from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Image } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBalanceScaleRight, faCalendarDay, faCaretRight, faMusic, faPencilAlt, faQuestionCircle, faUserAlt, faUserCircle, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/core';

const { width } = Dimensions.get('window')

function CustomDrawerContent(props) {
  const route = useRoute();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView style={styles.sidebarContainer} {...props}>
        <DrawerItemList {...props} />
        {route.params.isLogged ?
          <View style={styles.sidebarHeader} onTouchEnd={() => props.navigation.navigate('Profil')}>
            <View style={styles.sidebarHeaderShape}></View>
            <FontAwesomeIcon icon={faUserAlt} size={50} style={{ position: 'absolute', left: 42 }} color={'white'} />
            <FontAwesomeIcon icon={faUserCircle} size={75} style={styles.sidebarHeaderProfilIcon} color={'gray'} />
            <View style={styles.sidebarItemProfilTextWrapper}>
              <Text style={styles.sidebarHeaderProfilText}>EDITER MON</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.sidebarItemProfilLabel}>PROFIL</Text>
                <FontAwesomeIcon icon={faPencilAlt} size={16} style={{ marginLeft: 10 }} color={'white'} />
              </View>
            </View>
          </View>
          :
          <View style={styles.sidebarHeader} onTouchEnd={() => props.navigation.navigate('Login')}>
            <View style={styles.sidebarHeaderShape}></View>
            <FontAwesomeIcon icon={faUserAlt} size={50} style={{ position: 'absolute', left: 42 }} color={'white'} />
            <FontAwesomeIcon icon={faUserCircle} size={75} style={styles.sidebarHeaderProfilIcon} color={'gray'} />
            <View style={styles.sidebarItemProfilTextWrapper}>
              <Text style={styles.sidebarHeaderProfilText}>SE CONNECTER A</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.sidebarItemProfilLabel}>MON COMPTE</Text>
                <FontAwesomeIcon icon={faUserLock} size={16} style={{ marginLeft: 10 }} color={'white'} />
              </View>
            </View>
          </View>
        }
        <View style={styles.sidebarItem} onTouchEnd={() => props.navigation.navigate('Music')} >
          <FontAwesomeIcon icon={faMusic} size={width * 0.04} style={styles.sidebarItemIcon} />
          <DrawerItem
            pressColor={'#161616'}
            pressOpacity={100}
            style={styles.sidebarItemContent}
            labelStyle={styles.sidebarItemLabel}
            label="Musique"
          />
          <FontAwesomeIcon icon={faCaretRight} size={width * 0.04} color={'gray'} />
        </View>
        <View style={styles.sidebarSeparator}>
          <Text style={styles.sidebarSeparatorLabel}>Informations</Text>
        </View>
        <View style={styles.sidebarItem} onTouchEnd={() => props.navigation.navigate('Band')}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.plasticDuckLogo}
              source={require('../assets/plasticduck/logo1.png')}
            />
          </View>
          <DrawerItem
            pressColor={'#161616'}
            pressOpacity={100}
            style={styles.sidebarItemContent}
            labelStyle={styles.sidebarItemLabel}
            label="Les Plastic Duck"
          />
          <FontAwesomeIcon icon={faCaretRight} size={width * 0.04} color={'gray'} />
        </View>
        <View style={styles.sidebarItem} onTouchEnd={() => props.navigation.navigate('Events')}>
          <FontAwesomeIcon icon={faCalendarDay} size={width * 0.04} style={styles.sidebarItemIcon} />
          <DrawerItem
            pressColor={'#161616'}
            pressOpacity={100}
            style={styles.sidebarItemContent}
            labelStyle={styles.sidebarItemLabel}
            label="Evenements"
          />
          <FontAwesomeIcon icon={faCaretRight} size={width * 0.04} color={'gray'} />
        </View>
        <View style={styles.sidebarItem} onTouchEnd={() => props.navigation.navigate('Contact')}>
          <FontAwesomeIcon icon={faQuestionCircle} size={width * 0.04} style={styles.sidebarItemIcon} />
          <DrawerItem
            pressColor={'#161616'}
            pressOpacity={100}
            style={styles.sidebarItemContent}
            labelStyle={styles.sidebarItemLabel}
            label="Contact"
          />
          <FontAwesomeIcon icon={faCaretRight} size={width * 0.04} color={'gray'} />
        </View>
        <View style={styles.sidebarSeparator}>
          <Text style={styles.sidebarSeparatorLabel}>Mentions légales</Text>
        </View>
        <View style={styles.sidebarItem} onTouchEnd={() => props.navigation.navigate('Cgu')}>
          <FontAwesomeIcon icon={faBalanceScaleRight} size={width * 0.04} style={styles.sidebarItemIcon} />
          <DrawerItem
            pressColor={'#161616'}
            pressOpacity={100}
            style={styles.sidebarItemContent}
            labelStyle={styles.sidebarItemLabel}
            label="Conditions d'utilisation"
          />
          <FontAwesomeIcon icon={faCaretRight} size={width * 0.04} color={'gray'} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.sidebarFooter}>
        <Text style={styles.sidebarFooterText}>Plastic Duck - 2021</Text>
      </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
  const route = useRoute();
  return (
    <Drawer.Navigator
      screenOptions={{ headerTransparent: true, headerTintColor: 'white' }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen}
      initialParams={{isLogged: route.params.isLogged}}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          drawerActiveBackgroundColor: null
        }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    backgroundColor: '#2C2C2C',
  },
  sidebarHeader: {
    height: 80,
    position: 'relative'
  },
  sidebarHeaderShape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 90,
    height: 80,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderTopWidth: 120,
    borderRightColor: 'transparent',
    borderTopColor: '#BC8E0B'
  },
  sidebarHeaderProfilIcon: {
    position: 'absolute',
    left: 30,
    bottom: 20
  },
  sidebarItemProfilTextWrapper: {
    position: 'absolute',
    left: 110,
    bottom: 30,
    width: '100%'
  },
  sidebarHeaderProfilText: {
    fontFamily: 'Agency FB',
    fontSize: 22,
    color: 'white'
  },
  sidebarItemProfilLabel: {
    fontFamily: 'Agency FB Bold',
    fontSize: 22,
    color: '#FFC213',
    bottom: 1,
  },
  sidebarItem: {
    backgroundColor: '#161616',
    width: '100%',
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingHorizontal: 10
  },
  sidebarItemContent: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 0,
    flex: 3
  },
  sidebarItemIcon: {
    color: 'white',
  },
  sidebarSeparator: {
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 0
  },
  sidebarSeparatorLabel: {
    fontFamily: 'Agency FB',
    fontSize: width * 0.04,
    color: 'white'
  },
  sidebarItemLabel: {
    fontFamily: 'Agency FB Bold',
    fontSize: width * 0.04,
    color: 'white'
  },
  logoWrapper: {
    flex: 1,
  },
  plasticDuckLogo: {
    resizeMode: 'center',
    height: width * 0.09,
    borderRadius: 100 / 2
  },
  sidebarFooter: {
    backgroundColor: '#161616',
    paddingVertical: 2
  },
  sidebarFooterText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Agency FB Bold',
    fontSize: 16,
    textAlign: 'center'
  }
})