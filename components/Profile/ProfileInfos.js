import { faPencilAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Modal, NativeBaseProvider, Progress } from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Button } from 'react-native-elements'
import ProfilePointSection from './ProfilePointSection'

const { width } = Dimensions.get('window')

export default function ProfileInfos() {
    const [showModal, setShowModal] = useState(false)

    const [userLevel, setUserLevel] = useState(1)
    const [userExp, setUserExp] = useState(80)
    const [username, setUsername] = useState("Colonel Sakharov")
    const handleProfileAvatarChange = () => {
        alert('Change profile avatar')
    }

    const separator = (title, userLevel) => {
        return (
            <View style={styles.separatorContainer}>
                <View style={styles.separatorBanner}>
                    <Text style={styles.levelText}>{title} {userLevel}</Text>
                    <View style={styles.rightTriangle}></View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NativeBaseProvider>
                <Grid>
                    <Row style={{ alignItems: 'center', justifyContent: 'center', borderBottomColor: '#BC8E0B', borderBottomWidth: 1 }}>
                        <Col style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: width * 0.05 }}>
                            <View style={{ position: 'relative' }}>
                                <FontAwesomeIcon icon={faUserCircle} color={'gray'} size={width * 0.18} />
                                <View onTouchEnd={handleProfileAvatarChange} style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#2C2C2C', padding: width * 0.01, borderRadius: 50 }}>
                                    <FontAwesomeIcon icon={faPencilAlt} size={width * 0.025} color={'white'} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.smallText}>{username}</Text>
                            </View>
                        </Col>
                        <Col style={{ flex: 2 }}>
                            <Row style={{ flexDirection: 'column' }}>
                                {separator("NIVEAU", userLevel)}
                                <Progress _filledTrack={{
                                    bg: 'rgba(215,215,215,1)',
                                    borderRightRadius: 50,
                                }} value={userExp} height={2} backgroundColor={'rgba(14,14,14,0.5)'} width={width * 0.6} borderLeftRadius={0} borderColor={'black'} borderWidth={0.5} />
                            </Row>
                            <Row>
                                <View>
                                    <Button
                                        onPress={() => setShowModal(true)}
                                        titleStyle={{
                                            textAlign: 'center',
                                            fontFamily: 'Agency FB',
                                            fontSize: width * 0.04,
                                        }}
                                        buttonStyle={styles.winButton} title='COMMENT GAGNER DES POINTS DE FIDÉLITÉ ?' />
                                </View>
                            </Row>
                        </Col>
                    </Row>
                    <ProfilePointSection />
                </Grid>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px" backgroundColor={'#2C2C2C'}>
                        <Modal.CloseButton />
                        <Modal.Header borderColor={'black'} _text={{ color: 'white', textAlign: 'center', fontFamily: 'Agency FB Bold', fontSize: width * 0.04 }}>GAGNER DES POINTS DE FIDÉLITÉ</Modal.Header>
                        <Modal.Body paddingLeft={width * 0.02} paddingRight={width * 0.02}>
                            <Text style={styles.modalText}>POUR GAGNER DES POINTS DE FIDELITE, VOUS POUVEZ JOUER QUOTIDIENNEMENT A DES JEUX VIA NOTRE RUBRIQUE ACCESSIBLE SUR LA PAGE D’ACCUEIL.</Text>
                            <Text style={styles.modalText}>VOUS POURREZ ENSUITE ECHANGER CES POINTS CONTRE DES RECOMPENSES.</Text>
                        </Modal.Body>
                        <Modal.Footer borderColor={'black'} backgroundColor={'#2C2C2C'} justifyContent={'center'}>
                            <Button
                                titleStyle={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.05 }}
                                buttonStyle={styles.buttonStyle}
                                title={'JOUER'}
                                onPress={() => {
                                    setShowModal(false)
                                }}
                            />
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </NativeBaseProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    smallText: {
        width: width * 0.2,
        textAlign: 'center',
        fontFamily: 'Agency FB',
        fontSize: width * 0.03,
        color: 'white',
        marginTop: width * 0.01
    },
    modalText: {
        textAlign: 'center',
        fontFamily: 'Agency FB',
        fontSize: width * 0.04,
        color: 'white',
        marginTop: width * 0.01
    },
    winButton: {
        width: width * 0.6,
        borderRadius: 2,
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    levelText: {
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.04,
        color: 'white',
        paddingHorizontal: 10,
        backgroundColor: '#BC8E0B',
        flexShrink: 1
    },
    separatorContainer: {
        height: width * 0.05,
        position: 'relative',
        marginTop: width * 0.02,
    },
    separatorBanner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0
    },
    rightTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: width * 0.05,
        borderTopWidth: width * 0.06,
        borderRightColor: 'transparent',
        borderTopColor: '#BC8E0B',
        position: 'absolute',
        transform: [
            { rotate: '270deg' },
            { translateY: (width * 0.055) },
            { translateX: (width * 0.00) }
        ],
        position: 'absolute',
        right: 0
    },
    buttonStyle: {
        backgroundColor: '#161616',
        paddingHorizontal: width * 0.15,
        paddingVertical: width * 0.01
    }
})