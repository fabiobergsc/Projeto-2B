import { View, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import { Link } from "@react-navigation/native";



export default function Register({ route }) {

    return (        
        <View style={styles.container}>
            <Image source = {require('../../assets/imgs/logo.png')} style = {styles.imgLogo}/>
            <TextInput placeholder='usuário:' style = {styles.input}/>
            <TextInput placeholder='email:' style = {styles.input}/>    
            <TextInput placeholder='senha:'style = {styles.input}/>

            <TouchableOpacity style ={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style = {styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>Voltar para a página de Login</Link>
                <Link to={{screen: 'RegisterPage'}}>Esqueci minha senha</Link>

            </View>
        </View>
    )
}