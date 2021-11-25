import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Dimensions, Linking } from 'react-native'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')

export default function EventScreen({ navigation, route }) {
    const separator = (title) => {
        return (
            <View style={styles.separatorContainer}>
                <View style={styles.separatorBanner}>
                    <Text style={styles.separatorText}>{title}</Text>
                    <View style={styles.rightTriangle}></View>
                </View>
            </View>
        )
    }

    const data = [
        {
            title: `ON FAIT DE LA CHANSON FRANCAISE#3`,
            date: `17/12/2021`,
            location: `Gare Saint Sauveur, Lille`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `CONCERT INEDIT`,
            date: `10/6/2020`,
            location: `Gare Saint Sauveur, Lille`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `CONCERT INEDIT`,
            date: `10/6/2023`,
            location: `Gare Saint Sauveur, Lille`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `LES PLASTIC DUCK - LE BAND - ROAD LIFE SPIRIT LA TOURNÉE DU PERE NOEL`,
            date: `11/11/2021`,
            location: `LE MIDLAND, LILLE`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `CONCERT INEDIT`,
            date: `10/6/2028`,
            location: `Gare Saint Sauveur, Lille`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `LES PLASTIC DUCK - SORTIE DE NOTRE TOUTE PREMIERE BIERE `,
            date: `10/11/2021`,
            location: `LE BRASSERIE SAINT THEODORE, LENS`,
            link: `https://www.facebook.com/events/1021858861726879`
        },
        {
            title: `ANCIEN CONCERT`,
            date: `6/7/2017`,
            location: `Café de Paris, Lens`,
            link: `https://www.facebook.com/events/1021858861726879`
        }
    ]

    const event = (key, eventName, eventDate, eventLocation, eventLink) => {
        return (
            <View key={key} style={{ flex: 1, marginTop: width * 0.05, paddingVertical: width * 0.01, paddingHorizontal: width * 0.03, width: width, height: width * 0.15, backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <Grid>
                    <Row>
                        <Col onPress={() => {
                            Linking.canOpenURL(eventLink ? eventLink : 'https://www.facebook.com/PlasticDuck/events').then(() => {
                                Linking.openURL(eventLink ? eventLink : 'https://www.facebook.com/PlasticDuck/events');
                            })
                        }} style={{ flex: 4, justifyContent: 'space-between' }}>
                            <Text style={styles.eventTitle}>{eventName}</Text>
                            <Text style={styles.eventInfos}>{eventDate} - {eventLocation}</Text>
                        </Col>
                        <Col style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <FontAwesomeIcon icon={faCaretRight} color={'rgba(255, 255, 255, 0.5)'} size={width * 0.05} />
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }

    const nextEvents = () => {
        const date = new Date()
        return data.map((e, i) => {
            if (new Date(Date.UTC(e.date.split('/')[2], e.date.split('/')[1] - 1, e.date.split('/')[0])).getTime() >= date.getTime())
                return event(i, e.title, e.date, e.location, e.link)
        })
    }
    const oldEvents = () => {
        const date = new Date()
        return data.map((e, i) => {
            if (new Date(Date.UTC(e.date.split('/')[2], e.date.split('/')[1] - 1, e.date.split('/')[0])).getTime() < date.getTime())
                return event(i, e.title, e.date, e.location, e.link)
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                {separator("PROCHAINEMENT")}
                {
                    nextEvents()
                }
                {separator("HISTORIQUE")}
                {
                    oldEvents()
                }
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    separatorContainer: {
        flex: 1,
        height: width * 0.06,
        position: 'relative',
        marginTop: width * 0.05
    },
    separatorBanner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0
    },
    separatorText: {
        fontFamily: 'Agency FB',
        paddingHorizontal: 10,
        backgroundColor: '#BC8E0B',
        color: '#FFFFFF',
        fontSize: width * 0.05,
    },
    rightTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: width * 0.045,
        borderTopWidth: width * 0.061,
        borderRightColor: 'transparent',
        borderTopColor: '#BC8E0B',
        position: 'absolute',
        transform: [
            { translateX: (width * 0.044) }
        ],
        position: 'absolute',
        right: 0
    },
    eventTitle: {
        fontFamily: 'Agency FB Bold',
        color: '#FFC213',
        fontSize: width * 0.04
    },
    eventInfos: {
        fontFamily: 'Agency FB',
        color: 'white',
        fontSize: width * 0.03

    }
})