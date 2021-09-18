import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Card } from '../../Components/Card';
import Teste from '../../Contexts/Provider';
import { FormInput } from '../../Components/FormInput';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputTitle } from '../../Components/FormInputTitle';

const schema = yup.object().shape({
  title: yup.string().min(5).max(20).required("Por favor, insira um título"),
  description: yup.string().min(5).max(220).required("Por favor, insira uma descrição"), 
});

export function PostAdmin () {
  
  const [image,setImage] = useState(null);
  const {post, Publicar, DeletePublicacao} = Teste();

  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)});

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,4],
      quality:1
    })
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  async function login(data){
  
    try{
        return await Publicar(data.title, data.description, image);
    }catch(error){
        console.log(error);
    } 
   
  }

  return (
    
      <View style = {styles.containerAll} >
        <Image source={{ uri: image}} style={{
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 13,
          borderColor: '#0047ab',
          width: 320,
          height: 200,
        }} />
        <View style = {styles.containers}>
            <Text style = {styles.text}>Título</Text>
            <FormInputTitle name= "title" control={control} placeholder="Insira o título"
            error={ errors.title && errors.title.message }/>
        </View>
        <View style = {styles.containers}>
            <Text style = {styles.text}>Descreva sobre:</Text>
                <FormInput name="description" control={control} placeholder="Descreva sobre"
                error={ errors.description && errors.description.message }/>
            <View style = {styles.ViewButton}>
                <TouchableOpacity onPress={PickImage} >
                  <FontAwesome name="photo" size={35} color='#0047ab' />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress= {handleSubmit(login)}>
                    <Text style = {styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
        <FlatList data={post}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <Card image={item.image} titleText={item.title} descriptionText={item.description} onPress={() => DeletePublicacao(item.id)}/>
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
    },
    
    image: {
      marginTop:10,
      borderWidth:1,
      borderRadius:13,
      borderColor:'#0047ab',
      width:320,
      height:200
    }
});