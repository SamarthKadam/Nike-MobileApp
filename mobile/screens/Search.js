import {View, Text, StyleSheet,FlatList,ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Results/Card';

export default function Search() {
  const [text, setText] = useState('');
  const [Results,setResults]=useState([]);
  const [loading,setLoading]=useState(false);
  const [isEmtpy,setIsEmpty]=useState(false);
  const navigation=useNavigation();

  const handleInputChange=(value)=>{
    setText(value);
  }

  const searchHandler=async()=>{
    try{
      setLoading(true)
      const response=await fetch(`https://nike-mobile-backend.onrender.com/search/${text}`)
      const json=await response.json();
      setLoading(false);
      setResults(json.shoes);
      if(json.shoes.length===0)
      setIsEmpty(true)
      else
      setIsEmpty(false);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <View style={styles.screen}>
        <TextInput  style={[styles.content]}
        onChangeText={handleInputChange}
        mode="flat"
        textColor='black'
        activeUnderlineColor='white'
        left={<TextInput.Icon onPress={()=>{navigation.goBack()}} iconColor="black" size={28} icon="keyboard-backspace" />}
        right={<TextInput.Icon onPress={searchHandler} iconColor="black" size={38} icon="card-search" />}
        placeholderTextColor='#C9C9C9'
        cursorColor='#C9C9C9'
        placeholder="Search Products"/>
        {loading&&( <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>)}
       {!loading&&Results.length>0&&(<View style={styles.productScreen}>
        <FlatList
        data={Results}
        key={'#'}
        keyExtractor={(item, index) => '#' + index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        renderItem={({index, item}) => (
          <Card id={item._id} name={item.name} brand={item.brand} price={item.price} gallery={item.gallery[0]} />
        )}></FlatList>
        </View>)}
        {
          !loading&&isEmtpy&&(<View style={styles.emptyresults}>
            <Text style={{color:'black',fontWeight:'300',fontSize:16}}>No Items Found!</Text>
          </View>)
        }
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    height: 50,
    borderColor: '#DED4D3',
    fontSize:18,
    fontWeight:"100",
    paddingHorizontal: 10,
    width: '98%',
    backgroundColor:'white',
    marginVertical:5,
  },
  productScreen:{
    flex:1,
    paddingHorizontal:10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyresults:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
