import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/Pages/Admin/Login';
import { FeedNotices } from './src/Pages/FeedNotices';
import { Report } from './src/Pages/Report';
import { TelaInicial } from './src/Pages/TelaInicial';
import { Route } from './src/Routes/Route';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <Route/>
    </NavigationContainer>
  );
}