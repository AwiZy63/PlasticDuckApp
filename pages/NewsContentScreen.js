import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function NewsContentScreen() {
    const route = useRoute();
    return (
        <SafeAreaView style={{backgroundColor: '#161616'}}>
            <Text>News {route.params.name}</Text>
        </SafeAreaView>
    )
}
