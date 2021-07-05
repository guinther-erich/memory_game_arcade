import React from 'react';
import { StatusBar } from 'react-native';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Jost_400Regular } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Jost_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}