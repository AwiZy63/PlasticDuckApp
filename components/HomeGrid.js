import { faCalendarDay, faGamepad, faNewspaper, faPhotoVideo, faUserCircle, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

const { width, height } = Dimensions.get('screen')

export default function HomeGrid({ navigation }) {
    const [isAdmin, setIsAdmin] = useState(false)
    const horizontalSpacer = (
        <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: width * 0.3, height: 1, backgroundColor: 'rgba(188,142,11,0.3)' }}></View>
        </Col>
    )

    const verticalSpacer = (
        <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 1, height: height * 0.12, backgroundColor: 'rgba(188,142,11,0.3)' }}></View>
        </Col>
    )

    return (
        <>
            <Grid style={{ paddingHorizontal: width * 0.05 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Col onPress={() => { navigation.navigate('News') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faNewspaper} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>ACTUALITÉ</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col onPress={() => { navigation.navigate('Events') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faCalendarDay} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>ÉVENEMENTS</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>
                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}
                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col onPress={() => { navigation.navigate('Media') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faPhotoVideo} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>PHOTOS / VIDEOS</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col style={styles.colBox}>
                        <FontAwesomeIcon icon={faGamepad} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>JEUX</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>
                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}
                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col style={styles.colBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faUserCircle} size={width * 0.1} color={'white'} />
                            <View style={{ marginLeft: width * 0.01 }}>
                                <Text style={styles.boxText}>NIV. 1</Text>
                                <Text style={styles.profilText}>0 POINTS</Text>
                            </View>
                        </View>
                        <Text style={styles.boxText}>MON PROFIL</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    {isAdmin ?
                        <Col style={styles.colBox}>
                            <FontAwesomeIcon icon={faWrench} size={width * 0.1} color={'white'} />
                            <Text style={styles.boxText}>ACCÈS GESTION</Text>
                        </Col>
                        :
                        <Col style={styles.emptyColBox}>
                        </Col>
                    }
                </Row>
            </Grid>
        </>
    )
}

const styles = StyleSheet.create({
    colBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
        width: width * 0.4,
        height: height * 0.15
    },
    emptyColBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 5,
        width: width * 0.4,
        height: height * 0.15
    },
    boxText: {
        fontFamily: 'Agency FB Bold',
        color: 'white',
        fontSize: width * 0.05
    },
    profilText: {
        fontFamily: 'Agency FB',
        color: '#C4C4C4',
        fontSize: width * 0.03
    }
})