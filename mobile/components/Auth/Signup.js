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


const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      token
      name
    }
  }
`;

export default function Login() {
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('')
    const [confpassword,setConfpassword]=useState('');
    const { colors } = useTheme();
    const navigation=useNavigation();
    



    const onChangeName=(newTxt)=>{
        setName(newTxt);
    }

    const onChangeEmail = (newText) => {
      setEmail(newText);
    };

    const onChangePassword=(newPswd)=>{
        setPassword(newPswd)
    }

    const onChangeConfPassword=(Pswd)=>{
        setConfpassword(Pswd);
    }

    const [createUserMutation,{loading,data}] = useMutation(CREATE_USER_MUTATION);
    const handleCreateUser = async () => {
  
      try {
        const { data } = await createUserMutation({
          variables: { name, email, password },
        });
        dispatch(InitializeUser({id:data.createUser.id,name:data.createUser.name}));
        navigation.navigate('HOME');

      } catch (error) {
        console.error('Error:', error);
      }
    };

    const submitHandler=()=>{
      if(!name||!email||!password||!confpassword)
      return Alert.alert('Some fields are left empty');

      if(password!==confpassword)
      return Alert.alert("Please verify your password")

      handleCreateUser();
    }

  
  return (
    <View style={styles.container}>
        <Logo height={120} width={120}></Logo>
        <Text style={styles.Bigtxt}>Almost There !</Text>
        <Text style={styles.smtxt}>We are excited to see you here..!</Text>
        <View style={styles.inputContainer}>
        <TextInput  style={[styles.input]}
        onChangeText={onChangeName}
        value={name}
        mode="flat"
        textColor='black'
        left={<TextInput.Icon iconColor="black" icon="account" />}
        placeholderTextColor='#C9C9C9'
        placeholder="Name"/>
              <TextInput  style={[styles.input,{color:colors.primary}]}
        onChangeText={onChangeEmail}
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
          <TextInput  style={[styles.input,{color:colors.primary}]}
        onChangeText={onChangeConfPassword}
        value={confpassword}
        mode="flat"
        textColor='black'
        secureTextEntry={true}
        left={<TextInput.Icon iconColor="black" icon="lock-open" />}
        placeholderTextColor='#C9C9C9'
        placeholder="Confirm Password"/>
        </View>
        <Ripple onPress={()=>{submitHandler()}} rippleColor='rgb(211, 211, 211)' style={styles.button}>
      {loading?<ActivityIndicator size="small" color='white'></ActivityIndicator>:<Text style={[styles.buttonText]}>Sign Up</Text>}
    </Ripple>
    <View >
    <Text style={{color:'grey'}}>By signing up, you agree our <Text style={{fontWeight:'600',color:'#17A2F2'}}>Terms and Condtions</Text> and <Text style={{fontWeight:'600',color:'#17A2F2'}}>Privacy Policy</Text>  </Text>
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
        fontWeight:"100",
        paddingHorizontal: 10,
        width: '98%',
        backgroundColor:'white',
        marginVertical:5
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