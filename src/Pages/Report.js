import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import TesteMsg from '../Contexts/ProviderMsg';

export function Report () {

  const [title,setTitle] = useState('');
  const [endereco,setEndereco] = useState('');
  const [description,setDescription] = useState('');
  const {EnviarMensagem} = TesteMsg();

  async function enviar(){
    try{
        return await EnviarMensagem(title, endereco, description);
    }catch(error){
        console.log(error);
    } 

  }

  return (
      <View style = {styles.containerAll} >
        <View style = {styles.containers}>
          <Text style = {styles.text}>Título:</Text>
          <View style = {styles.boxTextTitle}>
            <TextInput style = {styles.textInput} placeholder = 'Insira aqui o tipo do problema/ideia' onChangeText = {x => setTitle(x)} value={title} autoCapitalize='words' />
          </View>
        </View>
        <View style = {styles.containers}>
          <Text style = {styles.text}>Endereço:</Text>
          <View style = {styles.boxTextAdress}>
            <TextInput style = {styles.textInput} placeholder = 'Insira aqui o endereço completo do local' onChangeText = {x => setEndereco(x)} value={endereco} autoCapitalize='words'/>
          </View>
        </View>
        <View style = {styles.containers}>
          <Text style = {styles.text}>Descreva sobre:</Text>
          <View style = {styles.boxTextDescription}>
            <TextInput style = {styles.textInput} placeholder = 'Descreva sobre o problema ou ideia' onChangeText = {x => setDescription(x)} value={description} autoCapitalize='words'/>
          </View>
          <View style = {styles.ViewButton}>
            <TouchableOpacity style = {styles.button} onPress={enviar}>
              <Text style = {styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    containerAll: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    text : {
      fontSize: 18,
      textAlign: 'left',
      color:'#0047ab',
      fontWeight: 'bold'
    },
    boxTextTitle: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: 320
    },
    boxTextAdress: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: 320
    },
    boxTextDescription: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      height: 120,
      width: 320
    },
    textInput : {
      height: 40,
      fontSize: 17,
      textAlign: 'left'
    },
    containers: {
      marginTop: 10,
      flexDirection: 'column'
    },
    ViewButton: {
      marginTop: 10,
      alignItems: 'flex-end'
    },
    button: {
      height: 45,
      width: 120,
      backgroundColor: '#0047ab',
      borderRadius: 10,
      justifyContent: 'center'
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        color: 'white'
    }
});
