import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo from '../../assets/images/svgImages/nike-black.svg'
import { useState } from 'react'
import { TextInput,useTheme} from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import { gql,useMutation} from '@apollo/client';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { InitializeUser } from '../../store/actions/user/action';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_USER_MUTATION = gql`
  mutation LoginUser( $email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      token
      name
    }
  }
`;

export default function Login() {

    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('')
    const { colors } = useTheme();
    const dispatch=useDispatch();
    const navigation=useNavigation();


    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('jwt', jsonValue);
      } catch (e) {
        console.log("ERROR",e);
      }
    };

    const onChangeText = (newText) => {
      setEmail(newText);
    };

    const onChangePassword=(newPswd)=>{
        setPassword(newPswd);
    }

    const [loginUserMutation,{loading,data}] = useMutation(LOGIN_USER_MUTATION);
    const handleCreateUser = async () => {
  
      try {
        const { data } = await loginUserMutation({
          variables: { email, password },
        });
        storeData(data.loginUser.token);
        dispatch(InitializeUser({id:data.loginUser.id,name:data.loginUser.name}));
        navigation.replace('HOME');

      } catch (error) {
        Alert.alert(`${error}!`);
        console.error('Error:', error);
      }
    };

    const submitHandler=()=>{
      if(!email||!password)
      return Alert.alert('Some fields are left empty');

      handleCreateUser();
    }
  
  return (
    <View style={styles.container}>
        <Logo height={120} width={120}></Logo>
        <Text style={styles.Bigtxt}>Welcome Back !</Text>
        <Text style={styles.smtxt}>Sign in to Continue</Text>
        <View style={styles.inputContainer}>
        <TextInput  style={[styles.input,{color:colors.primary}]}
        onChangeText={onChangeText}
        value={email}
        mode="flat"
        textColor='black'
        left={<TextInput.Icon iconColor="black" icon="email" />}
        placeholderTextColor='#C9C9C9'
        placeholder="Email"/>
              <TextInput  style={[styles.input,{color:colors.primary}]}
        onChangeText={onChangePassword}
        value={password}
        mode="flat"
        textColor='black'
        secureTextEntry={true}
        left={<TextInput.Icon iconColor="black" icon="lock-open" />}
        placeholderTextColor='#C9C9C9'
        placeholder="Password"/>
        </View>
        <Ripple rippleColor='rgb(211, 211, 211)' style={styles.button} onPress={()=>{submitHandler()}}>
        {loading?<ActivityIndicator size="small" color='white'></ActivityIndicator>:<Text style={[styles.buttonText]}>Sign In</Text>}
    </Ripple>
    <View >
    <Text style={{color:'grey'}}>Don't have an account? <Text style={{fontWeight:'600',color:'black'}}>SIGN UP!</Text></Text>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:18,
        paddingVertical:24
    },
    Bigtxt:{
        fontFamily:'DMSans',
        color:'black',
        fontSize:26,
        fontWeight:'700'
    },
    smtxt:{
        fontFamily:'DMSans',
        color:'black',
        marginTop:10,
        fontSize:15
    },
    inputContainer:{
        marginTop:34,
    },
    input: {
        height: 50,
        borderColor: '#DED4D3',
        borderWidth: 1,
        fontSize:18,
        paddingHorizontal: 10,
        width: '98%',
        backgroundColor:'white',
        marginVertical:10
      },
      button: { // Change the background color to your preference
        paddingHorizontal:24,
        paddingVertical:18,
        borderColor:'#CCCCCC',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor:'black',
        overflow:"hidden",
        marginVertical:44
      },
      buttonText: {
        fontSize: 17,
        fontWeight:'700',
        fontFamily:"DmSans",
        color:'white'
      },
})