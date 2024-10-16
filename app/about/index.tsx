import React from 'react'
import { Text , StyleSheet } from 'react-native'
const About = () => {
  return (
    <>
    <Text style={styles.About}>
    !! About Me !!
    </Text>    
    <Text style={styles.text}>
    (: I am Frontend Developer :)
    </Text>  
    </>
  )
}
const styles = StyleSheet.create({
About:{
    backgroundColor:"#333",
    fontSize:20,
    color:"white",
    padding:10,
    margin:5,
    textAlign:"center"
}
,
text:{
backgroundColor:"purple",
fontSize:20,
color:"white",
padding:10,
margin:5,
textAlign:"center"
}
});
export default About