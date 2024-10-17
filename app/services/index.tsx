import React from 'react'
import { View , Text , StyleSheet } from 'react-native'

const Services = () => {
  return (
    <>
    <View >
   <Text style={styles.text}>
   Services
    </Text>     
    </View>    
    </>
  )
}
const styles = StyleSheet.create({
    text:{      
    backgroundColor:"gray",
    color:"white",
    textAlign:"center",
    padding:20,
    margin:10,
    fontSize:30,
    }
})
export default Services

