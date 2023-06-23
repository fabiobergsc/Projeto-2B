import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardFilme from '/src/components/CardFilme';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';


export default function MoviesPage(){

    let [filmes, setFilmes] = useState([]);

    const baseURL = 'https://api.otaviolube.com/apifilmes?populate=*';

    useEffect(function () {
      fetch(baseURL)
          .then(data => data.jason())
          .then(objeto => {
              console.log(objeto);
              setFilmes(objeto.data);
      })
    }, []);

    return(
        <SafeAreaView style={styles.container}>
       { filmes.length > 0 ? <ScrollView horizontal>
        {
          filmes.map(filme => <CardFilme key ={filme.id} filme={filme.attributes}/>)
        }
       </ScrollView>: <ActivityIndicator size = {'large'}/>}
      </SafeAreaView>

    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
  });