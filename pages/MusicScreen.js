import React from 'react'
import { Dimensions, Image } from 'react-native'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')

export default function MusicScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.screenContainer}>
                <View onTouchEnd={() => {
                    navigation.navigate('MusicSelector', {
                        title: 'PROLOGUE',
                        spotifyLink: 'https://open.spotify.com/album/68oUQlF7jOvPos5P1hIgEo?si=0cNllpsPTTORk3hXeLxcKA'
                    })
                }} style={styles.boxContainer}>
                    <Image style={styles.boxImage} source={{uri: 'https://i.scdn.co/image/ab67616d00001e02a83dbb108c7411a7f88977eb'}} resizeMode={'cover'} />
                    <Text style={styles.boxText}>PROLOGUE</Text>
                </View>
                <View onTouchEnd={() => {
                    navigation.navigate('MusicSelector', {
                        title: 'PARTISAN DU MOINDRE EFFORT',
                        spotifyLink: 'https://open.spotify.com/album/3XnSNOo9z8DyrBZEKT5NWN?si=tq1zEE8QRmO1f16b73suaw'
                    })
                }} style={styles.boxContainer}>
                    <Image style={styles.boxImage} source={{uri: 'https://i.scdn.co/image/ab67616d00001e02aedd2987e7cb3c3a40d8a54e'}} resizeMode={'cover'} />
                    <Text style={styles.boxText}>PARTISAN DU MOINDRE EFFORT</Text>
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
        width: width * 0.7,
        height: width * 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5,
        paddingVertical: width * 0.02,
        paddingHorizontal: width * 0.02,
    },
    boxText: {
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.06,
        color: 'white'
    },
    boxImage: {
        width: width * 0.3,
        height: width * 0.3
    }
})