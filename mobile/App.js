import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { store } from './store/store';
import { ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.1.19:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
    <PaperProvider>
      <AppNavigator></AppNavigator>
    </PaperProvider>
    </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
