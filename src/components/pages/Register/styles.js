import { StyleSheet } from "react-native";


const styles = StyleSheet ({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    imgLogo : {
        height: '150px',
        width: '150px',
        marginBottom: 15

    },
    input : {
        border: '1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'gray'
    },
    btnLogin : {
        border: '2px solid black',
        width: '70%',
        height: '50',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },
    viewLinks : {
        marginTop: 10,
        width: '70%'
        
    }



});


export default styles;
