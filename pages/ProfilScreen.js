import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Footer from '../components/Footer'
import ProfileGrid from '../components/Profile/ProfileGrid'
import ProfileInfos from '../components/Profile/ProfileInfos'
import ProfilePointSection from '../components/Profile/ProfilePointSection'

export default function ProfilScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ProfileInfos />
            </View>
            <View style={{ flex: 2.5 }}>
                <ProfileGrid navigation={navigation} />
            </View>
            <Footer />
        </SafeAreaView>
    )
}
