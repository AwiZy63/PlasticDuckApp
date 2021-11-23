import React from 'react'
import { View, Dimensions, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
const { width } = Dimensions.get('window')

export default function SocialMedia() {
    return (
        <View style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            top: 40,
            width: width * 0.3,
            height: width * 0.08,
            backgroundColor: 'rgba(22,22,22,0.5)',
            right: 0,
            borderLeftWidth: 5,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            borderLeftColor: 'rgba(22,22,22,0.5)',
            zIndex: 999
        }}>
            <FontAwesomeIcon
                onPress={() => Linking.canOpenURL('https://www.facebook.com/PlasticDuck').then(() => {
                    Linking.openURL('https://www.facebook.com/PlasticDuck');
                })}
                icon={faFacebook}
                color={'white'}
                size={width * 0.05}
            />
            <FontAwesomeIcon
                onPress={() => Linking.canOpenURL('https://www.youtube.com/c/PlasticDuckTV').then(() => {
                    Linking.openURL('https://www.youtube.com/c/PlasticDuckTV');
                })}
                icon={faYoutube}
                color={'white'}
                size={width * 0.05}
            />
            <FontAwesomeIcon
                onPress={() => Linking.canOpenURL('https://www.instagram.com/lesplasticduck').then(() => {
                    Linking.openURL('https://www.instagram.com/lesplasticduck');
                })}
                icon={faInstagram}
                color={'white'}
                size={width * 0.05}
            />
            <FontAwesomeIcon
                onPress={() => Linking.canOpenURL('https://www.tiktok.com/@plasticduck_legroupe').then(() => {
                    Linking.openURL('https://www.tiktok.com/@plasticduck_legroupe');
                })}
                icon={faTiktok}
                color={'white'}
                size={width * 0.05}
            />
        </View>
    )
}
