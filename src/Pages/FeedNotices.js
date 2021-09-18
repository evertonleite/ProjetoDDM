import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CardUsers } from '../Components/CardUsers';
import Teste from '../Contexts/Provider';

export function FeedNotices () {

    const {post} = Teste();
    return (
      <FlatList data={post}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <CardUsers image={item.image} titleText={item.title} descriptionText={item.description}/>
          ) }/> 
    )
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