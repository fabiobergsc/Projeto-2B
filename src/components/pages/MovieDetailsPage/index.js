import { View, Text } from "react-native-web";

export default function MovieDatailsPage({ route }) {

    const {filme} = route.params;

    return (
        <View>
            <Text>Detalhes do Filme</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}