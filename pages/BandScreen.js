import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions } from 'react-native'
import Footer from '../components/Footer'
import { Grid, Row, Col } from 'react-native-easy-grid'

const { width } = Dimensions.get('window');

export default function BandScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.screenHeader}>
                    <Image style={styles.screenHeaderImage} resizeMode={'cover'} source={require('../assets/plasticduck/pc3.jpg')} />
                    <View style={styles.screenHeaderImageCover}></View>
                    <Grid style={styles.screenHeaderBanner}>
                        <Row style={{position: 'relative'}}>
                            <Col style={{ flex: 1 }}>
                                <Image resizeMode={'center'} style={styles.screenHeaderBannerLogo} source={require('../assets/plasticduck/logo_big.png')} />
                            </Col>
                            <Col style={styles.screenHeaderBannerText}>
                                <Text style={styles.screenHeaderBannerTextTitle}>Les Plastic Duck</Text>
                                <Text style={styles.screenHeaderBannerTextSubTitle}>Une énergie de bohème, des gimmicks de sourire, ils vivent leur septième vie à chaque représentation.</Text>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <Grid style={styles.formationContainer}>
                    <Col>
                    <Row><Text style={styles.formationTitle}>Formation</Text></Row>
                    </Col>
                    <Col></Col>
                </Grid>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenHeader: {
        borderBottomWidth: width * 0.003,
        borderBottomColor: '#BC8E0B',
        position: 'relative'
    },
    screenHeaderImageCover: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: width,
        height: width * 0.6
    },
    screenHeaderImage: {
        width: width,
        height: width * 0.6
    },
    screenHeaderBanner: {
        width: width,
        backgroundColor: 'rgba(0,0,0,0.65)',
        position: 'absolute',
        bottom: 0,
        height: width * 0.18
    },
    screenHeaderBannerLogo: {
        width: width * 0.3,
        position: 'absolute',
        bottom: width * 0.06,
        left: width * 0.02,
        height: width * 0.2
    },
    screenHeaderBannerText: {
        flex: 2,
        justifyContent: 'space-around',
        paddingHorizontal: width * 0.01
    },
    screenHeaderBannerTextTitle: {
        color: 'white',
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.06
    },
    screenHeaderBannerTextSubTitle: {
        color: 'white',
        fontFamily: 'Agency FB',
        fontSize: width * 0.035,
        marginBottom: width * 0.02,
    },
    formationRowBoldText: {
        fontFamily: 'Agency FB Bold'
    },
    formationTitle: {
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.05,
        color: 'white'
    }
})