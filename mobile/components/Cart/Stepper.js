import { View, Text, StyleSheet,Pressable} from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';


export default function Stepper({shoeId,onIncrement,onDecrement,value}) {

    const [stepperValue,setValue]=useState(value);
    const increment = () => {
        if(stepperValue<7)
        {
            onIncrement(shoeId,stepperValue+1);
            setValue(stepperValue+1);
        }
      };
    
      const decrement = () => {
        if (stepperValue> 0) {
          onDecrement(shoeId,stepperValue-1);
          setValue(stepperValue-1);
        }
      };


  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{decrement()}}>
        <Icon1 color="black" size={28} name="remove-circle-outline"></Icon1>
      </Pressable>
      <Text style={styles.txt}>{stepperValue}</Text>
      <Pressable onPress={()=>{increment()}}>
        <Icon1 color="black" size={28} name="add-circle-outline"></Icon1>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    txt:{
        color:'black',
        marginHorizontal:6,
        fontSize:20
    }
})