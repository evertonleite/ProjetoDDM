import React, {createContext, useContext, useState, useEffect} from 'react';
import { Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FuncoesContext = createContext({});

export function FuncoesProvider({children}) {

    const keyAsyncStorage = "@appTeste:Post";
    
    const [post,setPost] = useState([]);

    async function Publicar(title, description, image) {
        const data ={
            id: String (new Date().getTime()),
            title: title,
            description: description,
            image: image
        }
  
        const vetPost = [...post];
        vetPost.unshift(data);
  
        try{
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetPost));
        }catch(error){
            Alert.alert("Erro no envio do post");
        } 
  
        Keyboard.dismiss();
        loadData();
        
    }
  
    async function DeletePublicacao(id) {
        const newData = post.filter( item => item.id != id );
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));
        
        setPost(newData); 
    }
  
    async function loadData(){
        try{
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);   
            const teste = JSON.parse(retorno)
            setPost( teste || [] );
        }catch(error){
            Alert.alert("Erro na leitura dos dados");
        }
    }
  
    useEffect( ()=>{
        loadData();      
    }, []);

    return(
        <FuncoesContext.Provider value={{post, Publicar, DeletePublicacao}}>
            {children}
        </FuncoesContext.Provider>
    );
}
function Teste(){
    const context = useContext(FuncoesContext);
  
    return context;
  }
  
export default Teste;