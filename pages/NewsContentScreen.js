import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
export default function NewsContentScreen() {
    const route = useRoute();
    return (
        <SafeAreaView style={{ backgroundColor: '#161616' }}>
            <View style={styles.newsContainer}>
                <Image style={styles.newsImage} resizeMode={'cover'} source={route.params.image} />
                <Grid>
                    <Row style={styles.newsBanner}>
                        <Col style={{ justifyContent: 'space-between' }}>
                            <Text style={styles.newsTitle}>{route.params.title}</Text>
                            <Text style={styles.newsDate}>Publié le {route.params.date}</Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
            <ScrollView style={{
                padding: width * 0.03
            }}>
                <Text style={styles.newsText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ullam, beatae mollitia modi ab qui quo ducimus ipsam voluptatum porro a deserunt nobis atque nisi sint, sequi recusandae corrupti voluptas harum eos tempore est? Debitis, esse modi saepe incidunt maiores et eligendi! Animi expedita natus incidunt ratione temporibus, modi excepturi perspiciatis est, aliquid doloremque ducimus quidem nobis maxime alias! Quibusdam rem, libero tenetur reiciendis officiis laboriosam suscipit adipisci impedit unde labore eum quas recusandae eos voluptates saepe eius earum ipsum a nisi neque tempora placeat enim fuga aliquid. Impedit, corrupti exercitationem placeat expedita eligendi eveniet veritatis recusandae perferendis illo ut et voluptatum consequuntur? Perferendis eveniet quaerat similique voluptate odio. Error molestias incidunt voluptas harum quibusdam debitis nihil, libero minus inventore voluptates maiores iure tenetur maxime sapiente enim nisi ducimus, sint dignissimos nulla facere quia quis quae. Necessitatibus veritatis possimus, cum fuga, obcaecati odit sit iste laudantium explicabo unde tempore animi numquam! Commodi, aperiam odit! Quos nam explicabo praesentium non, vero quibusdam dolores ex sequi? Veritatis eos nulla adipisci iure, mollitia sunt facere, dolore earum sapiente deleniti, quas eius! Fugit odio dolore, sunt sint itaque iste, molestiae labore quaerat unde ipsum nobis assumenda consequuntur reprehenderit accusantium dolorem recusandae? Incidunt accusantium consequatur autem at magni animi tempora, ea, nesciunt voluptatibus optio, enim facilis asperiores fugiat molestiae repellendus quaerat cumque voluptas esse fuga adipisci reprehenderit aspernatur eaque? Inventore odit aliquam vitae necessitatibus sint optio tenetur voluptates labore praesentium nesciunt dolores qui, ipsam quia delectus. Quasi nostrum molestiae dicta ut necessitatibus excepturi incidunt atque error provident suscipit. Odit cupiditate sit magnam, excepturi dolorem sed rerum, soluta assumenda, eaque sequi nihil molestias reprehenderit vel nesciunt laboriosam. Accusantium earum dicta adipisci minima molestias quo impedit ut nihil illum fuga? Quidem soluta pariatur doloremque iusto voluptates ipsum architecto, vel optio reprehenderit repudiandae alias iste ea libero ipsa esse! Natus saepe sint tempore ipsam recusandae, consectetur totam quisquam sed, voluptates ullam enim repellat quaerat facere modi error ipsa velit reiciendis consequuntur dignissimos exercitationem omnis fugiat quas odit aliquam! Perspiciatis odit neque culpa. Dolorem ut unde mollitia explicabo assumenda aperiam numquam molestias autem culpa! Error minima nobis fuga neque ducimus consectetur repellendus earum distinctio, aliquam voluptas dolores. Fugiat laborum nihil consequuntur officiis accusamus facilis! Placeat aut ad asperiores, rem, quasi nihil eaque qui voluptatum illo ut dolorum distinctio at minus quo in minima! Illum consectetur voluptate ut nihil ad! Magnam voluptates maxime cum nam numquam adipisci a cumque sint, sequi voluptate, ex architecto id culpa impedit obcaecati mollitia aliquam ipsum non autem? Recusandae ipsum laborum voluptatum pariatur dolore, deleniti, et laudantium nemo cumque facere doloremque, error accusamus eaque. Illum non obcaecati soluta explicabo accusantium laborum expedita, impedit iusto unde quidem harum minus mollitia alias possimus qui ipsam ad beatae distinctio, ab quod debitis, necessitatibus similique. Vel nisi doloremque soluta accusantium enim laboriosam incidunt odio sed, consequatur architecto sit amet quos dicta iste quae quia exercitationem voluptatem quam nemo ipsum suscipit pariatur quidem. A vel aut unde quia quae facilis dolor, omnis quos asperiores possimus veritatis odit dolorem autem magnam.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: '#FFC213'
    },
    newsImage: {
        width: '100%',
        height: width * 0.5
    },
    newsBanner: {
        height: width * 0.2,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        bottom: 0,
        padding: width * 0.02
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
    newsText: {
        fontFamily: 'Agency FB',
        fontSize: width * 0.035,
        color: 'white'
    }
})