import {StyleSheet, View, ScrollView, useAnimatedValue} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Cart/Card';
import Info from '../components/Cart/Info';
import {
  getPrice,
  toNumber,
  formatToPrice,
  generateRandomNumber,
} from '../helper';
import Button from '../components/Cart/Button';
import Empty from '../components/Cart/Empty';
import {useQuery, gql, useMutation} from '@apollo/client';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux'
import { RemoveFromCart } from '../store/actions/user/action';

const CARTITEMS_QUERY = gql`
  query getCartItems($id: ID!) {
    userInfo(id: $id) {
      cartItems {
        count
        size
        shoe {
          id
          name
          brand
          description
          gallery
          price
          sizes
        }
      }
    }
  }
`;

const CHANGECOUNTCART = gql`
  mutation ChangeCartItems($id: ID!, $shoeId: ID!, $value: Int!) {
    changeCountInCart(id: $id, shoeId: $shoeId, value: $value) {
      name
    }
  }
`;

const REMOVEFROMCART = gql`
  mutation RemoveFromCart($id: ID!, $shoeId: ID!) {
    removeFromCart(id: $id, shoeId: $shoeId) {
      name
      cartItems {
        shoe {
          id
          name
        }
      }
    }
  }
`;

export default function Cart() {
  const navigation = useNavigation();
  const dispatch=useDispatch();
  const id = useSelector(state => state.user.id);
  const isFocused = useIsFocused();
  const {loading, error, data, refetch} = useQuery(CARTITEMS_QUERY, {
    variables: {id: id},
  });

  const [changecountInCart, {loading: mutationLoading, data: mutationdata}] =
    useMutation(CHANGECOUNTCART);

  const [deletefromCart, {loading: dmutatinLoading, data: deletedata}] =
    useMutation(REMOVEFROMCART);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (data === undefined) return;
    setCartItems(data.userInfo.cartItems);
  }, [data]);

  useEffect(() => {
    if (isFocused) {
      if (data === undefined) return;
      refetch();
      setCartItems(data.userInfo.cartItems);
    }
  }, [isFocused, data]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="small" />
      </View>
    );
  }

  if (cartItems.length === 0) return <Empty></Empty>;

  let price = 0;
  const totalPrice = cartItems.forEach(value => {
    const numberPrice = toNumber(getPrice(value.shoe.price));
    price += numberPrice * value.count;
  });

  const changeItemsHandler = async (shoeId, value) => {
    try {
      const {data} = await changecountInCart({
        variables: {id, shoeId, value},
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteItemHandler = async shoeId => {
    try {
      const {data} = await deletefromCart({
        variables: {id, shoeId},
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onIncrement = (id, count) => {
    if (count >= 7) return;

    changeItemsHandler(id, count);
    setCartItems(data => {
      const modifieddata = data.map(val => {
        if (val.shoe.id === id) return {...val, count: count};
        else return val;
      });
      return modifieddata;
    });
  };

  const onDecrement = (id, count) => {
    if (count == 0) {
      deleteItemHandler(id);
      dispatch(RemoveFromCart(id));
      setCartItems(data => {
        const modifieddata = data.filter(val => val.shoe.id !== id);
        return modifieddata;
      });
      return;
    }
    changeItemsHandler(id, count);
    setCartItems(data => {
      const modifieddata = data.map(val => {
        if (val.shoe.id === id) return {...val, count: count};
        else return val;
      });
      return modifieddata;
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        {cartItems.map((val, index) => (
          <Card
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            size={val.size}
            count={val.count}
            key={index}
            data={val.shoe}></Card>
        ))}
      </ScrollView>
      <Info left="Subtotal" right={formatToPrice(price)}></Info>
      <Info left="Delivery" right={formatToPrice(1250)}></Info>
      <Info
        isDark={true}
        left="Estimated Total"
        right={formatToPrice(price + 1250)}></Info>
      <Button
        onPress={() => {
          navigation.navigate('OrderConfirmed');
        }}
        title="Checkout"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: 'white',
    paddingHorizontal: 18,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
