import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Linking } from 'react-native'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')

export default function MusicSelectorScreen({ navigation }) {
    const route = useRoute();
    navigation.setOptions({ title: route.params.title })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.screenContainer}>
                <View onTouchEnd={() => {
                    Linking.canOpenURL(route.params.spotifyLink ? route.params.spotifyLink : 'https://open.spotify.com/artist/2aFlq3j33bQQrks4l0gXCD?si=g_FegFpNS8KjZ0WWA-42dw').then(() => {
                        Linking.openURL(route.params.spotifyLink ? route.params.spotifyLink : 'https://open.spotify.com/artist/2aFlq3j33bQQrks4l0gXCD?si=g_FegFpNS8KjZ0WWA-42dw');
                    })
                }} style={styles.boxContainer}>
                    <FontAwesomeIcon icon={faSpotify} size={width * 0.1} color={'white'} />
                    <Text style={styles.boxText}>SPOTIFY</Text>
                </View>
                <View onTouchEnd={() => { navigation.navigate('Video') }} style={styles.boxContainer}>
                    <FontAwesomeIcon icon={faMusic} size={width * 0.1} color={'white'} />
                    <Text style={styles.boxText}>LECTURE DIRECTE</Text>
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