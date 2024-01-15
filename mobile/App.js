import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { store } from './store/store';
import { ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Appearance } from 'react-native';

const client = new ApolloClient({
  uri: `https://nike-mobile-backend.onrender.com/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  Appearance.setColorScheme('light');
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
    <PaperProvider>
    <StripeProvider
      publishableKey="pk_test_51OX1GUSCbdDR2hHNUtJOH4ZnvAovfSZ2zQcssKY81dEX5beDqcR5dTdxLNBFcR0y1CD6JcojnnNl8Jo4kFt4ZwJL00sOejVhCK"
      urlScheme="NikeApp" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.Nike" // required for Apple Pay
    >
      <AppNavigator></AppNavigator>
      </StripeProvider>
    </PaperProvider>
    </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
