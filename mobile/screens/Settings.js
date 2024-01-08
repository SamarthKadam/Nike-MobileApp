import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SetShopScreen} from '../store/actions/ui/action';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Info from '../components/Settings/Info';
import {Chip} from 'react-native-paper';
import {IconButton} from 'react-native-paper';
import {Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {useQuery, gql, useMutation} from '@apollo/client';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

const INFO_QUERY = gql`
  query getData($id: ID!) {
    userInfo(id: $id) {
      name
      email
      shippingAddress
    }
  }
`;

const ADD_ADDRESS_MUTATION = gql`
  mutation AddAddress($id: ID!, $value: String!) {
    addAddressDetails(id: $id, value: $value) {
      shippingAddress
    }
  }
`;

export default function Settings() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.id);
  const isFocused = useIsFocused();

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const {loading, error, data, refetch} = useQuery(INFO_QUERY, {
    variables: {id: id},
  });

  const [addressMutation, {loading: loadingmutation, data: datamutation}] =useMutation(ADD_ADDRESS_MUTATION);

  useEffect(() => {
    if (isFocused) dispatch(SetShopScreen(false));
  }, [isFocused]);
  const [addressInput, setAddressInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (inputValue.length !== 0) setSubmitted(true);
  }, []);

  useEffect(() => {
    if (data===undefined) return;
    if (data.userInfo.shippingAddress === null)
    {
      setInputValue('');
    }
    else
    {
      setSubmitted(true);
      setInputValue(data.userInfo.shippingAddress);
    }
  }, [data]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  const onChangeInput = value => {
    setInputValue(value);
  };

  const AddAddressDetailsHandler = async () => {
    try {
      const {data} = await addressMutation({
        variables: {id, value:inputValue},
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const verifyInput = () => {
    if (inputValue.length === 0) return;

    AddAddressDetailsHandler();
    setAddressInput(false);
    setSubmitted(true);
    showToast("Successfully updated Address!");
  };

  return (
    <View style={styles.container}>
      <Info val="Name" ans={data.userInfo.name}></Info>
      <Info val="Email" ans={data.userInfo.email}></Info>
      {!submitted && (
        <View style={styles.inputcontainer}>
          <Text style={styles.input}>Address</Text>
          <Chip
            icon={({color, size}) => (
              <Icon name="map-marker-plus" size={size} color="#E18A42" />
            )}
            rippleColor={'#DBDBDB'}
            textStyle={{color: 'black'}}
            style={styles.chip}
            onPress={() => {
              setAddressInput(true);
            }}>
            Add your Address
          </Chip>
        </View>
      )}
      {submitted && (
        <View style={styles.inputcontainer}>
          <Text style={styles.input}>Address</Text>
          <Chip
            icon={({color, size}) => (
              <Icon name="map-marker-radius" size={size} color="#E18A42" />
            )}
            textStyle={{color: 'black'}}
            style={styles.chip}>
            {inputValue.length > 21
              ? inputValue.substring(0, 21) + '..'
              : inputValue}
          </Chip>
        </View>
      )}
      {addressInput && (
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Type your Address"
            placeholderTextColor={'#C9C9C9'}
            value={inputValue}
            onChangeText={onChangeInput}
            style={styles.txtinput}></TextInput>
          <IconButton
            icon="plus-circle"
            iconColor="black"
            size={24}
            onPress={() => {
              verifyInput();
            }}
          />
        </View>
      )}
      <View style={styles.gap}></View>
      <Ripple
        onPress={() => {
          console.log('Logout');
        }}
        style={styles.btnContainer}>
        <Text style={{color: 'red'}}>Log Out</Text>
      </Ripple>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  input: {
    color: 'black',
  },
  inputcontainer: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#ADADAD',
    flexDirection: 'row',
  },
  chip: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E18A42',
  },
  txtinput: {
    color: 'black',
    width: width - 80,
  },
  btnContainer: {
    borderBottomWidth: 1,
    paddingVertical: 14,
    borderBottomColor: '#ADADAD',
    paddingHorizontal: 16,
  },
  gap: {
    backgroundColor: '#F7F7F7',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
