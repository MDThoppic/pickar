import * as React from 'react';
import { Text } from 'react-native';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootStackNavScreens from './app/navigators/RootStackScreen';
import { themeColors } from './app/utils/constant';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: themeColors.white
  }, 
};

export default function App() {
  return (
    
    <>
     <NavigationContainer theme={MyTheme}>
       <RootStackNavScreens />
     </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: themeColors.yellow,
    paddingTop: Platform.OS === 'android' ? 15 : 0
  }
});