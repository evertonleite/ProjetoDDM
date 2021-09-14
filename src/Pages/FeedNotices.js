import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from '../Components/Card';
import Teste from '../Contexts/Provider';

export function FeedNotices () {

    const {post} = Teste();
    return (
      <FlatList data={post}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <Card titleText={item.title} descriptionText={item.description}/>
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