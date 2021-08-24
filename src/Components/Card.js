import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Card () {
    return (
        <View style={styles.card}>
                <View style = {styles.titleAndHour}>
                    <Text style = {styles.title}>Encanamento Quebrado</Text>
                    <Text style = {styles.Hour}>12/08/2021 • 15:30</Text>
                </View>
                <View style = {styles.PhotoEText}>
                    <Image style={styles.image} source={require('../images/encanamento.jpg')}/>
                    <Text style = {styles.texto}>O problema no encanamento da rua José Pereira que estava quebrado, já está sendo resolvido. A previsão é de que em 1hr a água já estará nas torneiras. Palmeiras não tem mundial e CR7Messi, apenas. DIDIDIE DIDIDIDIE CHEIA DE</Text> 
                </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card:{
        flex: 1,
        height: 150,
        width: '95%',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 5
    },
    image: {
        height: '90%',
        width: '40%',
        borderRadius: 10
    },
    texto: {
        marginLeft: 10,
        width: '65%'  
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3b3b3b'
    },
    PhotoEText: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%',
        width: '90%'
    },
    titleAndHour: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})