import React, { Component } from 'react'
import { AppRegistry, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const { width } = Dimensions.get('window')

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  header: {
    maxHeight: width / 1.5
  },
  headerComponents: {
    position: 'absolute',
    zIndex: 999,
    bottom: width * 0.2,
    left: width * 0.08
  },
  headerComponentsTitle: {
    fontFamily: 'Agency FB',
    color: 'white',
    fontSize: (width * 0.05),
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'black',
  },
  headerComponentsContent: {
    fontFamily: 'Agency FB Bold',
    color: 'white',
    width: width - (32 * 2),
    fontSize: (width * 0.04),
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'black',
  },
  headerShowButton: {
    fontFamily: 'Agency FB',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  headerShowButtonText: {
    position: 'absolute',
    bottom: (width * 0.3) - width * 0.065,
    left: (width * 0.04),
    fontFamily: 'Agency FB Bold',
    color: 'white',
    fontSize: (width * 0.05),
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: width * 0.07,
    borderRightColor: 'transparent',
    borderTopColor: '#BC8E0B'
  },
  topBanner: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -((width * 0.05) / 2) }],
    left: width * 0.03,
    top: width * 0.05
  },
  topBannerText: {
    fontFamily: 'Agency FB',
    paddingHorizontal: 10,
    backgroundColor: '#BC8E0B',
    color: '#FFFFFF',
    fontSize: width * 0.05,
  },
  rightTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: width * 0.035,
    borderTopWidth: width * 0.061,
    borderRightColor: 'transparent',
    borderTopColor: '#BC8E0B',
    position: 'absolute',
    transform: [
      { translateX: (width * 0.034) }
    ],
    position: 'absolute',
    right: 0
  },
  leftTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: width * 0.035,
    borderTopWidth: width * 0.061,
    borderRightColor: 'transparent',
    borderTopColor: '#BC8E0B',
    transform: [
      { rotate: '180deg' },
      { translateX: (width * 0.034) }
    ],
    position: 'absolute',
    left: 0
  },

})

export default function Slider({ navigation }) {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      autoplay
      autoplayTimeout={5}
      height={width / 1.5}
      paginationStyle={{ bottom: 0 }}
      prevButton
      nextButton
      activeDotColor={'#FFFFFF'}
      dotColor={'#A5A5A5'}
      index={0}
      loop
    >
      <View style={styles.header} onTouchEnd={() => navigation.navigate('NewsContent', { name: 'Actualité' })}>
        <Image style={{ maxHeight: width / 1.5, width: width, zIndex: 0 }} resizeMode={'cover'} source={require("../assets/plasticduck/pc1.jpg")} />
        <View style={styles.headerComponents}>
          <Text style={styles.headerComponentsTitle}>#ACTUALITES</Text>
          <Text style={styles.headerComponentsContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <View style={styles.headerShowButton}>
            <View style={styles.topBanner}>
              <Text style={styles.topBannerText}>VOIR PLUS</Text>
              <View style={styles.rightTriangle}></View>
              <View style={styles.leftTriangle}></View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.header} onTouchEnd={() => navigation.navigate('NewsContent', { name: 'Autre' })}>
        <Image style={{ maxHeight: width / 1.5, width: width, zIndex: 0 }} resizeMode={'cover'} source={require("../assets/plasticduck/pc2.jpg")} />
        <View style={styles.headerComponents}>
          <Text style={styles.headerComponentsTitle}>#AUTRE</Text>
          <Text style={styles.headerComponentsContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <View style={styles.headerShowButton}>
            <View style={styles.topBanner}>
              <Text style={styles.topBannerText}>VOIR PLUS</Text>
              <View style={styles.rightTriangle}></View>
              <View style={styles.leftTriangle}></View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.header} onTouchEnd={() => navigation.navigate('NewsContent', { name: 'Nouveau' })}>
        <Image style={{ maxHeight: width / 1.5, width: width, zIndex: 0 }} resizeMode={'cover'} source={require("../assets/plasticduck/pc3.jpg")} />
        <View style={styles.headerComponents}>
          <Text style={styles.headerComponentsTitle}>#NOUVEAU</Text>
          <Text style={styles.headerComponentsContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <View style={styles.headerShowButton}>
            <View style={styles.topBanner}>
              <Text style={styles.topBannerText}>VOIR PLUS</Text>
              <View style={styles.rightTriangle}></View>
              <View style={styles.leftTriangle}></View>
            </View>
          </View>
        </View>
      </View>
    </Swiper >
  )
}