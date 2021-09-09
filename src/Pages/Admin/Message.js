import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { CardMessage } from '../../Components/CardMessage';

export function Message() {
    return (
      <SafeAreaView style = {styles.scroll}>
        <ScrollView style = {styles.scroll}>
          <View style={styles.container}>
             <CardMessage/>
             <CardMessage/>
             <CardMessage/>
             <CardMessage/>
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