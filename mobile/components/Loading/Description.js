import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/svgImages/nike_logo.svg';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect} from 'react';
import { gql,useMutation} from '@apollo/client';
import { InitializeUser } from '../../store/actions/user/action';
import { useDispatch } from 'react-redux';

const VERIFY_USER_MUTATION = gql`
  mutation VerifyUser( $token: String!) {
    tokenToUser(token: $token) {
      id
      name
    }
  }
`;


export default function Description({setLoginOpen,setSignupOpen}) {
  const navigation=useNavigation();
  const dispatch=useDispatch();
  const [isLoggedIn,setIsLoggedIn]=useState(null)
  const [verifyUserMutation,{loading,data}] = useMutation(VERIFY_USER_MUTATION);
  const handleUser = async (token) => {
    try {
      const { data } = await verifyUserMutation({
        variables: {token},
      });
      dispatch(InitializeUser({id:data.tokenToUser.id,name:data.tokenToUser.name}));
      console.log("successfully verified user");
      navigation.replace('HOME');
    } catch (error) {
      setIsLoggedIn(false);
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
    const retrievedValue = AsyncStorage.getItem('jwt').then((value) => {
      console.log(value); // This will log 'null' initially
      if(value!==null)
      handleUser(JSON.parse(value));
      else if(value===null)
      setIsLoggedIn(false)
    });
  },[])
  

  return (
    <View style={styles.container}>
      <Logo height={80} width={80}></Logo>
      <Text style={styles.txt}>
        Bringing Nike Members the best products,inspiration and stories in
        sport.
      </Text>
      <View style={styles.btnContainer}>
        {isLoggedIn===null?(<Button title="LOADING..." onPress={() => {}} btnStyle={styles.btn2} txtStyle={styles.btn2txt}></Button>):(<>
          <Button title="Sign up" onPress={() => {setSignupOpen(true)}} btnStyle={styles.btn1} txtStyle={styles.btn1txt}></Button>
          <Button title="Sign In" onPress={() => {setLoginOpen(true)}} btnStyle={styles.btn2} txtStyle={styles.btn2txt}></Button>
        </>)}
        {/* {<>
          <Button title="Sign up" onPress={() => {setSignupOpen(true)}} btnStyle={styles.btn1} txtStyle={styles.btn1txt}></Button>
          <Button title="Sign In" onPress={() => {setLoginOpen(true)}} btnStyle={styles.btn2} txtStyle={styles.btn2txt}></Button>
        </>} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '87%',
    position: 'absolute',
    bottom: 0,
    justifyContent:"flex-end",
    paddingHorizontal: 15,
    paddingVertical:20
  },
  txt: {
    color: 'white',
    fontSize: 25,
    lineHeight: 30,
    fontFamily:'Oswald-Regular'
  },
  btn1: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20,
  },
  btn1txt:{
    color: 'black'
  },
  btn2: {
    borderWidth:1,
    borderColor:'white',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20,
  },
  btn2txt:{
    color:'white'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
});
