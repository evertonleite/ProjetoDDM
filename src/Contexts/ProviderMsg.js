import React, {createContext, useContext, useState, useEffect} from 'react';
import { Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportContext = createContext({});

export function ReportProvider ({children}) {

  const keyAsyncStorage = "@appTeste:Messages";

  const [messages,setMessages] = useState([]);

  async function EnviarMensagem(title, endereco, description) {
      const data ={
          id: String (new Date().getTime()),
          title: title,
          endereco: endereco,
          description: description
      }

      const vetMessages = [...messages];
      vetMessages.unshift(data);

      try{
          await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetMessages ) );
          Alert.alert("Mensagem enviada com sucesso.")
      }catch(error){
          Alert.alert("Erro no envio da sua mensagem.");
      } 

      Keyboard.dismiss();
      loadData();

      console.log(messages)
      
  }

  async function loadData(){
      try{
          const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
          const teste = JSON.parse( retorno )
          setMessages( teste || [] );
      }catch(error){
          Alert.alert("Erro na leitura dos dados");
      }
  }

  useEffect( ()=>{
      loadData();      
  }, []);

    return(
        <ReportContext.Provider value={{messages, EnviarMensagem}}>
            {children}
        </ReportContext.Provider>
    )
}
function TesteMsg(){
    const context = useContext(ReportContext);
  
    return context;
}
  
export default TesteMsg;