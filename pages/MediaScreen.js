import { faFilm, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')

export default function MediaScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.screenContainer}>
                <View onTouchEnd={() => {navigation.navigate('Photo')}} style={styles.boxContainer}>
                    <FontAwesomeIcon icon={faImage} size={width * 0.1} color={'white'} />
                    <Text style={styles.boxText}>PHOTOS</Text>
                </View>
                <View onTouchEnd={() => {navigation.navigate('Video')}} style={styles.boxContainer}>
                    <FontAwesomeIcon icon={faFilm} size={width * 0.1} color={'white'} />
                    <Text style={styles.boxText}>VIDEOS</Text>
                </View>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    boxContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: width * 0.5,
        height: width * 0.4,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    boxText: {
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.06,
        color: 'white'
    }
})