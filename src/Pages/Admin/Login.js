import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ButtonLogin } from '../../Components/ButtonLogin';
import { InputText } from '../../Components/InputText';

export function Login () {

    const [user, setUser] = useState(12345);
    const [password, setPassword] = useState(12345);

    function login (navigation){

        if(user == 12345 && password == 12345){
            navigation.navigate('Entrar')
        }else{
            alert('Houve um erro! Verifique user e senha.')
        }
    }

    return (
      <ImageBackground source={require('../../images/tela-inicial.jpg')} style={styles.imageBackground}>
          <View style = {styles.containerLogoETexto}>
              <AntDesign name="home" size={100} color="white"/>
              <Text style={styles.LogoText}>MyCity</Text>
          </View>
          <View style = {styles.containerLogin} >
              <InputText keyboardType = 'numeric' title = 'Username' text = {x => setUser(x)} />
              <InputText title = 'Senha' text = {y => setPassword(y)}/>
              <ButtonLogin title = 'Entrar' onPress = {(login)}/>     
          </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerLogin : {
      height: '40%',
      width: '80%',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center'
  },
  containerLogoETexto: {
      marginTop: 100,
      alignItems: 'center',
  },
  LogoText: {
      fontSize: 17,
      color: 'white'
  }
});
