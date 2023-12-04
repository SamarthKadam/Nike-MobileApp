import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
function App() {
  return (
    <PaperProvider>
      <AppNavigator></AppNavigator>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
