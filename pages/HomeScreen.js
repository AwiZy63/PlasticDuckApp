import { data } from '../data'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Slider from '../components/Slider'
import { Dimensions } from 'react-native'
import SocialMedia from '../components/SocialMedia'
import HomeGrid from '../components/HomeGrid'
import Footer from '../components/Footer'
import { useRoute } from '@react-navigation/core'

const { width } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {
    const route = useRoute();
    const isLogged = route.params.isLogged
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161616' }}>
            <View style={{ flex: 1, maxHeight: width / 1.5, position: 'relative' }}>
                <Slider data={data} navigation={navigation} />
                <SocialMedia />
            </View>
            <View style={{ flex: 1 }}>
                <HomeGrid isLogged={isLogged} navigation={navigation} />
            </View>
            <Footer/>
        </SafeAreaView>
    )
}
