import { View, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import { Link } from "@react-navigation/native";



export default function LoginPage({ route }) {

    return (        
        <View style={styles.container}>
            <Image source = {require('../../assets/imgs/logo.png')} style = {styles.imgLogo}/>
            <TextInput placeholder='email:' style = {styles.input}/>
                
            <TextInput placeholder='senha:'style = {styles.input}/>

            <TouchableOpacity style ={styles.btnLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            <View style = {styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>Registre-se</Link>
                <Link to={{screen: 'ForgetPassword'}}>Esqueci minha senha</Link>

            </View>
        </View>
    )
}