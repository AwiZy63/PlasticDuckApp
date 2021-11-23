import { faCalendarDay, faGamepad, faNewspaper, faPhotoVideo, faUserCircle, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { View, Text } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

const { width, height } = Dimensions.get('screen')

export default function HomeGrid() {
    const [isAdmin, setIsAdmin] = useState(true)
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
                    <Col style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        width: width * 0.4,
                        height: height * 0.15
                    }}>
                        <FontAwesomeIcon icon={faNewspaper} size={width * 0.1} color={'white'} />
                        <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>ACTUALITÉ</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        width: width * 0.4,
                        height: height * 0.15
                    }}>
                        <FontAwesomeIcon icon={faCalendarDay} size={width * 0.1} color={'white'} />
                        <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>ÉVENEMENTS</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>

                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}

                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        width: width * 0.4,
                        height: height * 0.15
                    }}>
                        <FontAwesomeIcon icon={faPhotoVideo} size={width * 0.1} color={'white'} />
                        <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>PHOTOS / VIDEOS</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    <Col style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        width: width * 0.4,
                        height: height * 0.15
                    }}>
                        <FontAwesomeIcon icon={faGamepad} size={width * 0.1} color={'white'} />
                        <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>JEUX</Text>
                    </Col>
                </Row>
                <Row style={{ height: 1, justifyContent: 'space-between' }}>

                    {/* SPACER */}
                    {horizontalSpacer}
                    {horizontalSpacer}
                    {/* SPACER */}

                </Row>
                <Row style={{ justifyContent: 'space-around' }}>

                    <Col style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        width: width * 0.4,
                        height: height * 0.15
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faUserCircle} size={width * 0.1} color={'white'} />
                            <View style={{ marginLeft: width * 0.01 }}>
                                <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>NIV. 1</Text>
                                <Text style={{ fontFamily: 'Agency FB', color: '#C4C4C4', fontSize: width * 0.03 }}>0 POINTS</Text>
                            </View>
                        </View>
                        <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>MON PROFIL</Text>
                    </Col>
                    {/* SPACER */}
                    {verticalSpacer}
                    {/* SPACER */}
                    {isAdmin ?
                        <Col style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            width: width * 0.4,
                            height: height * 0.15
                        }}>
                            <FontAwesomeIcon icon={faWrench} size={width * 0.1} color={'white'} />
                            <Text style={{ fontFamily: 'Agency FB Bold', color: 'white', fontSize: width * 0.05 }}>ACCÈS GESTION</Text>

                        </Col>
                        :

                        <Col style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: 'rgba(0,0,0,0)',
                            width: width * 0.4,
                            height: height * 0.15
                        }}>
                        </Col>
                    }
                </Row>
            </Grid>
        </>
    )
}
