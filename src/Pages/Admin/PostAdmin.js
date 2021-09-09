import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert, Keyboard} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from '../../Components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function PostAdmin () {

  const keyAsyncStorage = "@appTeste:post";

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [post,setPost] = useState([]);

  async function handlePublicar() {
      const data ={
          id: String (new Date().getTime()),
          title: title,
          description: description
      }

      const vetPost = [...post];
      vetPost.unshift(data);

      try{
          await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetPost ) );
      }catch(error){
          Alert.alert("Erro no envio do post");
      } 

      Keyboard.dismiss();
      setTitle("");
      setDescription("");
      loadData();
      
  }

  async function handleDeletePubli( id ) {
      const newData = post.filter( item => item.id != id );
      await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( newData ));
      
      setPost(newData); 
  }

  async function loadData(){
      try{
          const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
          const teste = JSON.parse( retorno )
          setPost( teste || [] );
      }catch(error){
          Alert.alert("Erro na leitura dos dados");
      }
  }

  useEffect( ()=>{
      loadData();      
  }, []);

  return (
      <View style = {styles.containerAll} >
        <View style = {styles.containers}>
          <Text style = {styles.text}>Título</Text>
          <View style = {styles.boxTextAdress}>
            <TextInput style = {styles.textInput} placeholder = 'Insira o título' value={title} onChangeText={setTitle} />
          </View>
        </View>
        <View style = {styles.containers}>
          <Text style = {styles.text}>Descreva sobre:</Text>
          <View style = {styles.boxTextDescription}>
            <TextInput style = {styles.textInput} placeholder = 'Descreva sobre' value={description} onChangeText={setDescription} />
          </View>
          <View style = {styles.ViewButton}>
            <FontAwesome name="photo" size={35} color='#0047ab' />
            <TouchableOpacity style = {styles.button} onPress= {handlePublicar}>
                <Text style = {styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList data={post}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <Card titleText={item.title} descriptionText={item.description} onPress={() => handleDeletePubli(item.id)}/>
          ) }/> 
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
      fontSize: 17
    },
    containers: {
      marginTop: 10,
      flexDirection: 'column'
    },
    ViewButton: {
      marginTop: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    button: {
      height: 45,
      width: 120,
      backgroundColor: '#0047ab',
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: 20
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        color: 'white'
    }
});
