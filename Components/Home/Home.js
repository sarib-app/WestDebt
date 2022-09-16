import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import{Color,TextColor,LoginButtonColor,SignButtonFirstColor,SignButtonSecondColor,PolicyTextColor} from '../Color/Color';
import {StyleSheet,  Dimensions,View,Button,Text,Image, Pressable}from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const Home =({navigation })=>{
    return(
<LinearGradient start={{x: 0, y: 0}} end={{x:1, y: 1}} colors={['#c8e6c9', Color]} style={styles.container}>
<Image style={styles.logo} source={require('../../Images/Homepageimage/WestDebtLogo.png')}/>
   <View style={styles.textView}>
<Text style={styles.textFont}>The App That Destroys Your Debt</Text>
   </View>
<View style={styles.photo}>
<Image style={styles.image} source={require('../../Images/Homepageimage/image.png')}/>
</View>
<View style={styles.ButtonView}>
<Pressable  onPress={()=>navigation.navigate("Login")} style={styles.Login}>
<Text style={styles.sign} >Login</Text>
</Pressable>
<LinearGradient  start={{x: 1, y: 0}} end={{x:0, y: 1}} colors={[SignButtonFirstColor, SignButtonSecondColor]} style={styles.Signup}>

<Pressable onPress={()=>navigation.navigate("SignUp")} ><Text  style={styles.sign} >Sign Up</Text></Pressable>
</LinearGradient>
</View>
<View style={styles.Privacy}>
<Text style={styles.policy}>Privacy Policy</Text>
</View>
</LinearGradient>
   ) }
export default Home;
const styles=StyleSheet.create({
container:{
    width:windowWidth,
    height:windowHeight,
    justifyContent:"center",
    alignItems:"center"
},
logo:{
  width:117.3,
  height:59.11  
},
image:{
    width:327.72,
    height:274.18,
    
},
text:{
  fontSize:25,
  fontWeight:"bold",
  color:TextColor ,
  textAlign:"center" ,
  
},
textFont:{
    fontSize:25,
    fontWeight:"bold",
    color:TextColor ,
    textAlign:"center" ,

},
Login:{
   width:windowWidth/2.3,
   height:windowHeight/15,
   backgroundColor:LoginButtonColor,
   justifyContent:'center',
   alignItems:"center",
   borderRadius:30 
},
Signup:{
    width:windowWidth/2.3,
    height:windowHeight/15,
    justifyContent:'center',
    alignItems:"center",
    borderRadius:30,
    marginTop:10
},
Privacy:{
   width:windowWidth/3,
   height:windowHeight/19,
   justifyContent:"center",
   alignItems:"center",
   
},
policy:{
    textAlign:"center",
    color:PolicyTextColor,
    fontSize:15,
    textDecorationLine:"underline"
},
sign:{
    fontSize:20,
    color:Color,
    textAlign:'center'
},
textView:{
    width:windowWidth/1.6,
    height:windowHeight/9,
    justifyContent:'center',
    alignItems:"center",

},
ButtonView:{
    width:windowWidth/2,
    height:windowHeight/5,
    alignItems:"center",
    justifyContent:"center"
},
photo:{
width:windowWidth/1.4,
height:windowHeight/2.5,
marginTop:20,
justifyContent:'center',
alignItems:"center"
}








})