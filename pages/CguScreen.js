import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../components/Footer'

const { width } = Dimensions.get('window')

export default function CguScreen() {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                {separator("Préambule")}
                <View style={styles.section}>
                    <Text style={styles.text}>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
                        des modalités de mise à disposition du site et des services par l'éditeur et de définir les
                        conditions d'accès et d'utilisation des services par « l'Utilisateur ».
                        Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
                        Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des
                        présentes CGU par l'utilisateur. Lors de l'inscription sur le site via le Formulaire d'inscription, chaque
                        utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : «
                        Je reconnais avoir lu et compris les CGU et je les accepte ».
                        En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer
                        à l'accès des services proposés par le site.
                        Plastic Duck se réserve le droit de modifier unilatéralement et à tout moment le contenu des
                        présentes CGU.</Text>
                </View>
                {separator("Article 1 : Les mentions légales")}
                <View style={styles.section}>
                    <Text style={styles.text}>L'édition et la direction de la publication du site Plastic Duck est assurée par Flanquart Bastien, domicilié 02 rue du 11 Novembre 1918.</Text>
                    <Text style={styles.text}>Numéro de téléphone est 0611730551</Text>
                    <Text style={styles.text}>Adresse e-mail est flanquart.bastien@gmail.com</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>L'hébergeur du site Plastic Duck est la société OVH SAS, dont le siège social est situé au 2 rue Kellermann - 59100 Roubaix - France, avec le numéro de téléphone : 1007.</Text>
                </View>
                {separator("Article 2 : Accès à l'application")}
                <View style={styles.section}>
                    <Text style={styles.text}>L'application Plastic Duck permet à l'Utilisateur un accès gratuit aux services suivants : L'application propose les services suivants : Suivi des actualités, des médias et des évènements du groupe Les Plastic Duck avec la possibilité de gagner des points de fidélité pour obtenir des récompenses InApp via un ou plusieurs jeux, il est possible également de contacter le groupe via l'application. L'application est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge. L'Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s'inscrire en remplissant le formulaire. Dès lors inscrit, l'utilisateur s'engage à accepter les CGU ci présent et s'engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email. Pour accéder aux services, l'Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription. Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant sur la page de contact et en renseignant sa demande. Celle-ci sera effective dans un délai raisonnable. Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité des Plastic Duck. Dans ces cas, l'Utilisateur accepte ainsi ne pas tenir rigueur à l'éditeur de toute interruption ou suspension de service, même sans préavis.
                        L'Utilisateur a la possibilité de contacter l'editeur par messagerie électronique à l'adresse email de l'éditeur communiqué à l'ARTICLE 1.</Text>
                </View>
                {separator("Article 3 : Collecte des données")}
                <View style={styles.section}>
                    <Text style={styles.text}>L'application est exempté de déclaration à la commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les Utilisateurs.</Text>
                </View>
                {separator("Article 4 : Propriété intellectuelle")}
                <View style={styles.section}>
                    <Text style={styles.text}>Les marques, logos, signes ainsi que tous les contenus de l'application (textes, images, son…) font l'objet
                        d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur. L'Utilisateur doit solliciter l'autorisation préalable de l'application pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                        Toute représentation totale ou partielle de cette application par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant de l'application mobile constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle. Il est rappelé conformément à l'article L122-5 du Code de propriété intellectuelle que l'Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l'auteur et sa source.</Text>
                </View>
                {separator("Article 5 : Responsabilité")}
                <View style={styles.section}>
                    <Text style={styles.text}>Les sources des informations diffusées sur l'application Plastic Duck sont réputées fiables mais l'application ne garantie pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, l'application Plastic Duck ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, l'application ne peut être tenue responsable de l'utilisation et de l'interprétation de l'information contenue dans cette application. L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. L'application décline toute responsabilité. L'application Plastic Duck ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter le mobile ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de cette application. La responsabilité de l'application ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</Text>
                </View>
                {separator("Article 6 : Liens hypertextes")}
                <View style={styles.section}>
                    <Text style={styles.text}>Des liens hypertextes peuvent être présents sur l'application. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira de l'application Plastic Duck. Ce dernier n'a pas de contrôle sur les composants de l'application sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</Text>
                </View>
                {separator("Article 7 : Cookies")}
                <View style={styles.section}>
                    <Text style={styles.text}>L'Utilisateur est informé que lors de ses visites sur l'application, un cookie peut s'installer automatiquement. Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l''appareil de l'Utilisateur par votre application et qui sont nécessaires à l'utilisation de l'application Plastic Duck. Les cookies ne contiennent pas d'information personnelle et ne peuvent pas être utilisés pour identifier quelqu'un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l'Utilisateur, d'autres restent. L'information contenue dans les cookies est utilisée pour améliorer l'application Plastic Duck. En naviguant sur l'application, L'Utilisateur les accepte. L'Utilisateur pourra désactiver ces cookies par l'intermédiaire des paramètres figurant au sein de son appareil.</Text>
                </View>
                {separator("Article 8 : Droit applicable et juridiction compétente")}
                <View style={styles.section}>
                    <Text style={styles.text}>La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                        Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées inscrites à l'ARTICLE 1.</Text>
                </View>
                <Footer />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    separatorContainer: {
        height: width * 0.06,
        position: 'relative',
        marginTop: width * 0.05,
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
        flexShrink: 1
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
    section: {
        padding: width * 0.05,
        marginTop: width * 0.05
    },
    text: {
        fontFamily: 'Agency FB',
        color: 'white',
        fontSize: width * 0.035
    }
})