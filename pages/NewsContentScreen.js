import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

export default function NewsContentScreen() {
    const route = useRoute();
    return (
        <View>
            <Text>News {route.params.name}</Text>
        </View>
    )
}
