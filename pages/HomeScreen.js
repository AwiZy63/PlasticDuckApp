import { data } from '../data'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Slider from '../components/Slider'
import { Dimensions, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const { width } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, maxHeight: width / 1.5, position: 'relative' }}>
                <Slider data={data} navigation={navigation} />
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 40,
                    width: width * 0.3,
                    height: width * 0.065,
                    backgroundColor: 'black',
                    right: 0,
                    borderLeftWidth: 5,
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    zIndex: 999
                }}>
                    <FontAwesomeIcon
                        onTouchEnd={() => Linking.canOpenURL('https://www.facebook.com/PlasticDuck').then(() => {
                            Linking.openURL('https://www.facebook.com/PlasticDuck');
                        })}
                        icon={faFacebook}
                        color={'white'}
                        size={width * 0.04}
                    />
                    <FontAwesomeIcon
                        onTouchEnd={() => Linking.canOpenURL('https://www.tiktok.com/@plasticduck_legroupe').then(() => {
                            Linking.openURL('https://www.tiktok.com/@plasticduck_legroupe');
                        })}
                        icon={faTiktok}
                        color={'white'}
                        size={width * 0.04}
                    />
                    <FontAwesomeIcon
                        onTouchEnd={() => Linking.canOpenURL('https://www.instagram.com/lesplasticduck').then(() => {
                            Linking.openURL('https://www.instagram.com/lesplasticduck');
                        })}
                        icon={faInstagram}
                        color={'white'}
                        size={width * 0.04}
                    />
                    <FontAwesomeIcon
                        onTouchEnd={() => Linking.canOpenURL('https://www.youtube.com/c/PlasticDuckTV').then(() => {
                            Linking.openURL('https://www.youtube.com/c/PlasticDuckTV');
                        })}
                        icon={faYoutube}
                        color={'white'}
                        size={width * 0.04}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ flex: 1 }}>Another</Text>
            </View>
        </SafeAreaView>
    )
}
