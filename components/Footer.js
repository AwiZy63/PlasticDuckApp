import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default function Footer() {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', height: width*0.06}}>
            <Text style={{color: 'rgba(255,255,255,0.5)', fontFamily: 'Agency FB Bold', fontSize: width * 0.03}}>PLASTIC DUCK - 2021</Text>
        </View>
    )
}
