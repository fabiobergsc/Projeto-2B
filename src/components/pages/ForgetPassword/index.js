import { View, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import { Link } from "@react-navigation/native";



export default function ForguetPassword({ route }) {

    return (        
        <View style={styles.container}>
            <Image source = {require('../../assets/imgs/logo.png')} style = {styles.imgLogo}/>
            <TextInput placeholder='email:' style = {styles.input}/>

            <TouchableOpacity style ={styles.btnLogin}>
                <Text>Recuperar</Text>
            </TouchableOpacity>
            <View style = {styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>Registre-se</Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para a página de Login</Link>

            </View>
        </View>
    )
}