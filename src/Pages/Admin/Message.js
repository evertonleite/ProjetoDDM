import React from 'react';
import {StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CardMessage } from '../../Components/CardMessage';
import TesteMsg from '../../Contexts/ProviderMsg';

export function Message() {

  const {messages, ApagarMensagem} = TesteMsg();

    return (
       <FlatList data={messages}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <CardMessage sugestion={item.sugestion} title={item.title} endereco={item.endereco} description={item.description} onPress={() => ApagarMensagem(item.id)} />
          ) }/>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center'

  },
  scroll: {
    flex: 1
  }
});