import { faCaretRight, faDownload, faExpand, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Picker } from '@react-native-picker/picker'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../components/Footer'
import { downloadToFolder } from 'expo-file-dl';

const { width } = Dimensions.get('window');

export default function VideoScreen() {
    const [selectedValue, setSelectedValue] = useState("default")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.filterContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.filterBox}
                    dropdownIconColor={'white'}
                    dropdownIconRippleColor={'gray'}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item style={styles.filterItem} label="Séléctionnez une date" value={'default'} enabled={false} />
                    <Picker.Item style={styles.filterItem} label="JANVIER 2021" value={'0/2021'} />
                    <Picker.Item style={styles.filterItem} label="FEVRIER 2021" value={'1/2021'} />
                    <Picker.Item style={styles.filterItem} label="MARS 2021" value={'2/2021'} />
                    <Picker.Item style={styles.filterItem} label="AVRIL 2021" value={'3/2021'} />
                    <Picker.Item style={styles.filterItem} label="MAI 2021" value={'4/2021'} />
                </Picker>
            </View>
            <ScrollView>
                <View style={styles.videosContainer}>
                    <Image style={styles.videosImage} resizeMode={'cover'} source={require('../assets/plasticduck/pc2.jpg')} />
                    <Grid>
                        <Row style={styles.videosBanner}>
                            <Col style={{ flex: 4, justifyContent: 'space-between' }}>
                                <Text style={styles.videosTitle}>VIDEO NUMERO UNE POUR LA PAGE VIDEOS</Text>
                                <Text style={styles.videosDate}>15/11/2021 - MAISON DES PROJETS, LENS - CREDITS</Text>
                            </Col>
                            <Col style={styles.actionContainer}>
                                <View onTouchEnd={async () => { }} style={styles.actionBox}>
                                    <FontAwesomeIcon icon={faPlay} color={'rgba(255, 255, 255, 1)'} size={width * 0.05} />
                                </View>
                                <View onTouchEnd={async () => {
                                    //await downloadToFolder('https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg', 'image.jpg', '/Downloads', '1');
                                }} style={styles.actionBox}>
                                    <FontAwesomeIcon icon={faDownload} color={'rgba(255, 255, 255, 1)'} size={width * 0.05} />
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    videosContainer: {
        position: 'relative',
        marginTop: width * 0.1
    },
    videosImage: {
        width: '100%',
        height: width * 0.5
    },
    videosBanner: {
        height: width * 0.2,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        bottom: 0,
        paddingVertical: width * 0.01,
        paddingHorizontal: width * 0.04
    },
    videosTitle: {
        fontFamily: 'Agency FB',
        color: '#FFC213',
        fontSize: width * 0.05
    },
    videosDate: {
        fontFamily: 'Agency FB Bold',
        color: 'white',
        fontSize: width * 0.03
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    actionBox: {
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: width * 0.005
    },
    filterContainer: {
        color: 'white',
        width: width * 0.5,
        backgroundColor: 'rgba(0,0,0,0.75)',
        padding: 0,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: width * 0.07,
        marginBottom: width * 0.07

    },
    filterBox: {
        height: width * 0.07,
        color: 'white'
    },
    filterItem: {
        fontSize: width * 0.04,
        fontFamily: 'Agency FB'
    }
})