import { faBalanceScaleLeft, faCalendarDay, faGamepad, faLock, faNewspaper, faPencilAlt, faPhotoVideo, faPowerOff, faQuestionCircle, faUserCircle, faUserLock, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

const { width, height } = Dimensions.get('screen')

export default function ProfileGrid({ navigation, isLogged }) {
    const [isAdmin, setIsAdmin] = useState(false)
    const [appVersion, setAppVersion] = useState("1.0")
    const [appVersionDate, setAppVersionDate] = useState(new Date())


    const formattedAppVersionDate = `${appVersionDate.getDate()}-${appVersionDate.getMonth() + 1}-${appVersionDate.getFullYear()} ${appVersionDate.getHours()}:${appVersionDate.getMinutes()}`

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
                    <Col onPress={() => { navigation.navigate('Profil') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faPencilAlt} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>ÉDITER MON COMPTE</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col onPress={() => { navigation.navigate('Profil') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faLock} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>MODIFIER MON MOT DE PASSE</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>
                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}
                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col onPress={() => { navigation.navigate('Contact') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faQuestionCircle} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>NOUS CONTACTER</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col onPress={() => { navigation.navigate('Profil') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faPowerOff} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>SE DÉCONNECTER</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>
                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}
                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col onPress={() => { navigation.navigate('Cgu') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faBalanceScaleLeft} size={width * 0.1} color={'white'} />
                        <Text style={styles.boxText}>C.G.U</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col onPress={() => { navigation.navigate('Profil') }}
                        style={styles.colBox}>
                        <FontAwesomeIcon icon={faWrench} size={width * 0.1} color={'white'} />
                        <View>
                            <Text style={styles.boxText}>VERSION {appVersion}</Text>
                            <Text style={styles.boxSubText}>({formattedAppVersionDate})</Text>
                        </View>
                    </Col>
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
        fontSize: width * 0.05,
        marginHorizontal: width * 0.03,
        textAlign: 'center'
    },
    boxSubText: {
        fontFamily: 'Agency FB',
        color: 'white',
        fontSize: width * 0.03,
        marginHorizontal: width * 0.03,
        textAlign: 'center'
    },
    profilText: {
        fontFamily: 'Agency FB',
        color: '#C4C4C4',
        fontSize: width * 0.03
    }
})