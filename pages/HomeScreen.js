import { data } from '../data'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Slider from '../components/Slider'
import { Dimensions } from 'react-native'
import SocialMedia from '../components/SocialMedia'
import HomeGrid from '../components/HomeGrid'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161616' }}>
            <View style={{ flex: 1, maxHeight: width / 1.5, position: 'relative' }}>
                <Slider data={data} navigation={navigation} />
                <SocialMedia />
            </View>
            <View style={{ flex: 1 }}>
                <HomeGrid navigation={navigation} />
            </View>
            <Footer/>
        </SafeAreaView>
    )
}
