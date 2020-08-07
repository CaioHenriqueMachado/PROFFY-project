import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/Archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/Poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
};
