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
                        <Row style={{ position: 'relative' }}>
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
                    <Row><Text style={styles.formationTitle}>Formation</Text></Row>
                    <Grid>
                        <Col style={{ flex: 1 }}>
                            <Row><Text style={styles.formationRowNameText}>Benoit AMBROZY</Text></Row>
                            <Row><Text style={styles.formationRowNameText}>Marc SZARCZYNSKI</Text></Row>
                            <Row><Text style={styles.formationRowNameText}>Julien HATTON</Text></Row>
                            <Row><Text style={styles.formationRowNameText}>Chris CAMPHIN</Text></Row>
                            <Row><Text style={styles.formationRowNameText}>Jérôme DUPUICH</Text></Row>
                            <Row><Text style={styles.formationRowNameText}>Prenom NOM</Text></Row>
                        </Col>
                        <Col style={{ flex: 2 }}>
                            <Row><Text style={styles.formationRowPracticeText}>Chant, saxophones (soprano, alto, ténor, baryton)</Text></Row>
                            <Row><Text style={styles.formationRowPracticeText}>Chant, guitares (classique, manouche, électrique)</Text></Row>
                            <Row><Text style={styles.formationRowPracticeText}>Choeur, piano, accordéon</Text></Row>
                            <Row><Text style={styles.formationRowPracticeText}>Choeur, guitare, guitare basse</Text></Row>
                            <Row><Text style={styles.formationRowPracticeText}>Batterie, percussions</Text></Row>
                            <Row><Text style={styles.formationRowPracticeText}>Trombone, guitare basse</Text></Row>
                        </Col>
                    </Grid>
                </Grid>
                <View style={styles.bioContainer}>
                    <Text style={styles.formationTitle}>Biographie</Text>
                    <Text style={styles.bioText}>Après des expériences musicales variées, Benoît et Marc décident de se lancer dans une nouvelle aventure, celle des Plastic Duck.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Tout un univers est alors créé se nourrissant de leurs influences respectives ainsi que de leur goût commun pour la chanson française, autant de leur enfance comme Brel, Brassens, Maxime le Forestier, que de chanteurs plus actuels tels que Sanseverino, Yves Jamait ou Zoufris Maracas.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Dans leur texte, ces deux amis de longue date abordent des sujets actuels et sensibles de façon humoristique voire osée. « L’humour, c’est le droit d’être imprudent, d’avoir le courage de déplaire, la permission absolue d’être imprudent. » (Pierre Desproges - 1986)</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Toujours en quête de partage, ils décidèrent d’intégrer de nouveaux comédiens à la formation initiale.
                        Ces personnages, partageant les mêmes ambitions, rejoignirent le groupe en apportant de nouvelles couleurs et des sonorités plus swing.
                        Le premier spectacle est alors monté pour une première représentation en 2015.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Après quelques concerts dans des salles locales, des festivals et des troquets, ils participèrent au tremplin « A travers Chant » (Saint-Saulve) où ils conquirent le jury, leur permettant d’atteindre la première place. S’enchainent alors un passage en studio pour l’enregistrement d’un EP 3 titres «Prologue» ainsi que la réalisation d’un clip vidéo sur leur titre «Garanti Sans Paraben».</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Toujours en quête de partage, ils décidèrent d’intégrer de nouveaux comédiens à la formation initiale. Ces personnages, partageant les mêmes ambitions, Les compositions émergent et se succèdent, donnant naissance à un second spectacle en 2019 jonglant entre comédie, swing, chanson française, hip-hop et amour.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Le groupe conquiert à nouveau le jury en 2020, celui de « Y’a pas l’feu » cette fois-ci,  lui permettant de remporter un nouveau tremplin musical.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Son premier album 10 titres « partisan du moindre effort » voit le jour cette même année ainsi que plusieurs vidéo-clips.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Le groupe se voit malheureusement annuler la totalité de ses dates pour les raisons sanitaires que nous connaissons bien.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Les Plastic Duck décident alors durant cette période très  "particulière" de continuer à promouvoir la musique par le biais des réseaux sociaux en proposant régulièrement des adaptations de leurs morceaux et  en mettant à contribution leur public.</Text>
                    <Text></Text>
                    <Text style={styles.bioText}>Quand les représentations ont enfin pu reprendre, c’est avec d’autant plus de conviction et de motivation que le groupe se prend au jeu, proposant un spectacle vivant, toujours plus dynamique et souriant.</Text>
                </View>
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
    formationContainer: {
        backgroundColor: '#2C2C2C',
        paddingHorizontal: width * 0.02,
        paddingVertical: width * 0.01
    },
    formationRowNameText: {
        fontFamily: 'Agency FB Bold',
        color: 'white',
        fontSize: width * 0.035
    },
    formationRowPracticeText: {
        fontFamily: 'Agency FB',
        color: 'white',
        fontSize: width * 0.035
    },
    formationTitle: {
        fontFamily: 'Agency FB Bold',
        fontSize: width * 0.05,
        color: 'white',
        marginBottom: width * 0.03
    },
    bioContainer: {
        paddingHorizontal: width * 0.02,
        paddingVertical: width * 0.01
    },
    bioText: {
        fontFamily: 'Agency FB',
        color: 'white',
        fontSize: width * 0.03
    }
})