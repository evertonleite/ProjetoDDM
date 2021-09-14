import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { Route } from './src/Routes/Route';
import { NavigationContainer } from '@react-navigation/native';
import { FuncoesProvider } from './src/Contexts/Provider';
import { ReportProvider } from './src/Contexts/ProviderMsg';

export default function App() {
  return (
    <ReportProvider>
    <FuncoesProvider>
      <NavigationContainer>
            <Route/> 
      </NavigationContainer>
    </FuncoesProvider>
    </ReportProvider>
  );
}