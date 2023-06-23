import { Link, NavigationContainer } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const baseURL = 'https://api.otaviolube.com';

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source=
            {{uri: baseURL + filme.poster.data.attributes.url}} />
            <Text style={styles.title}> {filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.
            length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse }</Text>
            <Link to = {{screen: 'MovieDatailsPage', params: {filme: filme}}}>Saiba mais...</Link>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.btnText}>Comprar</Text> 
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10

    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10

    },
    sinopse: {
        marginBottom: 10,
        textAling: 'justify'
    },
    button: {
        height: 20,
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'

    }

})










