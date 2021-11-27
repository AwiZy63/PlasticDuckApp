import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const { width } = Dimensions.get('window');

export default function ProfilePointSection() {
    const [userPoint, setUserPoint] = useState(60);

    return (
        <SafeAreaView style={{ borderBottomColor: '#BC8E0B', borderBottomWidth: 1 }}>
            <View style={{paddingVertical: width * 0.02, alignItems: 'center'}}>
                <Text style={styles.mainText}>Vous avez <Text style={styles.pointText}>{userPoint} points de fidélité</Text> <FontAwesomeIcon icon={faStar} color={'#FFC213'} style={{marginLeft: width * 0.05}} /></Text>
                <Button onPress={() => alert('Obtenir des récompenses')} titleStyle={{fontFamily: 'Agency FB', fontSize: width * 0.04}} buttonStyle={styles.button} title={'OBTENIR DES RÉCOMPENSES '} icon={<FontAwesomeIcon icon={faArrowRight} color={'white'} size={width * 0.03} />} iconPosition={'right'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontFamily: 'Agency FB Bold',
        color: 'white',
        fontSize: width * 0.04,
        textAlign: 'center',
        marginBottom: width * 0.02
    },
    pointText: {
        color: '#FFC213FA',
        marginRight: 10
    },
    button: {
        paddingHorizontal: width * 0.06,
        paddingVertical: width * 0.003,
        borderRadius: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
})