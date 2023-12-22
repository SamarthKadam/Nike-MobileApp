import { View, Text } from 'react-native';
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetData($id: ID!) {
    shoe(id: $id) {
      name
    }
  }
`;

export default function Orders() {
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { id: '658078cc9375d18cde5a08fa' }, // Replace with your dynamic ID
  });

  console.log(data); // Check the console for data when it's available or undefined

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  // Ensure data.shoe is not undefined before accessing name
  const shoeName = data?.shoe?.name || 'No Name';

  return (
    <View>
      <Text>Shoe Name: {shoeName}</Text>
    </View>
  );
}