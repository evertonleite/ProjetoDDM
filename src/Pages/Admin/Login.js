import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ButtonLogin } from '../../Components/ButtonLogin';
import { InputText } from '../../Components/InputText';
import { PostAdmin } from '../Admin/PostAdmin';

export function Login ({navigation}) {
    
    /*const [user, setUser] = useState(null);
    const [password, setPassoword] = useState(null);

    function VerificationLogin (){
        if(user == 12345 && password == 12345){
            return <PostAdmin />
        }else{
            alert('Houve um erro! Verifique o user e senha.')
        }
    }*/

    return (
      <ImageBackground source={require('../../images/tela-inicial.jpg')} style={styles.imageBackground}>
          <View style = {styles.containerLogoETexto}>
              <AntDesign name="home" size={100} color="white"/>
              <Text style={styles.LogoText}>MyCity</Text>
          </View>
          <View style = {styles.containerLogin} >
              <InputText keyboardType = 'numeric' title = 'Username' />
              <InputText title = 'Senha' />
              <ButtonLogin title = 'Entrar' onPress = {() => {navigation.navigate('Entrar')}} />     
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
