import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <AppNavigator></AppNavigator>
    </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
