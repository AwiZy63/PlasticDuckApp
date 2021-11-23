import { data } from '../data'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Slider from '../components/Slider'
import { Dimensions } from 'react-native'
import SocialMedia from '../components/SocialMedia'
import HomeGrid from '../components/HomeGrid'

const { width } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161616' }}>
            <View style={{ flex: 1, maxHeight: width / 1.5, position: 'relative' }}>
                <Slider data={data} navigation={navigation} />
                <SocialMedia />
            </View>
            <View style={{ flex: 1 }}>
                <HomeGrid />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', height: width*0.06}}>
                <Text style={{color: 'rgba(255,255,255,0.5)', fontFamily: 'Agency FB Bold', fontSize: width * 0.03}}>PLASTIC DUCK - 2021</Text>
            </View>
        </SafeAreaView>
    )
}
