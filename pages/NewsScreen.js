import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { Dimensions, FlatList, Linking, SafeAreaView } from 'react-native'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');

export default function NewsScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.newsContainer}>
                    <Image style={styles.newsImage} resizeMode={'cover'} source={require('../assets/plasticduck/actu1.jpg')} />
                    <Grid>
                        <Row onPress={() => {
                            Linking.canOpenURL('https://www.facebook.com/PlasticDuck/posts/289713843159248').then(() => {
                                Linking.openURL('https://www.facebook.com/PlasticDuck/posts/289713843159248');
                            })
                        }} style={styles.newsBanner}>
                            <Col style={{ flex: 4, justifyContent: 'space-between' }}>
                                <Text style={styles.newsTitle}>CONCERT POUR "LE VILLAGE DU PÈRE NOEL"</Text>
                                <Text style={styles.newsDate}>Publié le 14/11/2021</Text>
                            </Col>
                            <Col style={styles.bannerNextIcon}>
                                <FontAwesomeIcon icon={faCaretRight} color={'rgba(255, 255, 255, 0.5)'} size={width * 0.05} />
                            </Col>
                        </Row>
                    </Grid>
                    <View style={styles.topBanner}>
                        <Text style={styles.topBannerText}>#CONCERT</Text>
                        <View style={styles.rightTriangle}></View>
                        <View style={styles.leftTriangle}></View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        position: 'relative',
        marginTop: width * 0.1
    },
    newsImage: {
        width: '100%',
        height: width * 0.5
    },
    newsBanner: {
        height: width * 0.2,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        bottom: 0,
        paddingVertical: width * 0.01,
        paddingHorizontal: width * 0.04
    },
    newsTitle: {
        fontFamily: 'Agency FB',
        color: '#FFC213',
        fontSize: width * 0.05
    },
    newsDate: {
        fontFamily: 'Agency FB Bold',
        color: 'white',
        fontSize: width * 0.03
    },
    bannerNextIcon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    topBanner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateY: -((width * 0.05) / 2) }],
        right: width * 0.08
    },
    topBannerText: {
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
        borderRightWidth: width * 0.035,
        borderTopWidth: width * 0.061,
        borderRightColor: 'transparent',
        borderTopColor: '#BC8E0B',
        position: 'absolute',
        transform: [
            { translateX: (width * 0.034) }
        ],
        position: 'absolute',
        right: 0
    },
    leftTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: width * 0.035,
        borderTopWidth: width * 0.061,
        borderRightColor: 'transparent',
        borderTopColor: '#BC8E0B',
        transform: [
            { rotate: '180deg' },
            { translateX: (width * 0.034) }
        ],
        position: 'absolute',
        left: 0
    },
})