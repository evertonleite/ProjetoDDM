import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '../Components/Card';

export function FeedNotices () {
    return (
      <SafeAreaView style = {styles.scroll}>
        <ScrollView style = {styles.scroll}>
          <View style={styles.container}>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
          </View>
        </ScrollView>
      </SafeAreaView>
      
    
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