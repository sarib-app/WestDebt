import React from 'react'

import {StyleSheet,  Dimensions,View,Button,Text,Image, Pressable, TextInput}from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextColor,SignUpScreenColor,SplashScreenFirstColor,SplashScreenSecondColor, Color,LoginColor } from '../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const SignUp =({navigation})=>{
    return(
<View style={styles.container}>
<Image style={styles.image} source={require('../../Images/WestDebt.png')}/>
<View style={styles.TextView}>
<Text style={styles.started}>Get Started</Text>
<Text style={styles.text}>The App That Destroys Your Debt</Text>
</View>
<View style={styles.InputFieldView}> 
<Text style={styles.Name}>Full Name</Text>
<TextInput style={styles.input}   placeholder={"Type Here"}     />
<Text style={styles.Name}>Email</Text>
<TextInput style={styles.input}   placeholder={"Type Here"}     />
<Text style={styles.Name}>Password</Text>
<TextInput style={styles.input}   placeholder={"Type Here"}     />
<Text style={styles.Name}>Confirm Password</Text>
<TextInput style={styles.input}   placeholder={"Type Here"}     />
</View>
<LinearGradient style={styles.Login}  start={{x: 0, y: 1}} end={{x:1, y: 1}} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<Text  style={styles.next}>Next</Text>
<Image style={styles.arrow} source={require('../../Images/SignUp/arrow.png')}/>
</LinearGradient>
<View style={styles.email}>
    <Text style={styles.save}>Your email address will allow you to save your progress. Already have an account?  </Text>
    <Text onPress={()=>navigation.navigate("Login")} style={styles.address}>Log in</Text>
</View>
    
    




    </View>
    )}
export default SignUp;
const styles=StyleSheet.create({
container:{
   width:windowWidth,
   height:windowHeight,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:SignUpScreenColor 
},
image:{
    width:223.2,
    height:51.69
},
TextView:{
    width:windowWidth/1.2,
    height:windowHeight/7,
    alignItems:"center",
    justifyContent:"center"
},
started:{
    fontSize:20,
    fontWeight:"bold",
    color:TextColor,
    textAlign:"center"
},
text:{
    fontSize:16,
    textAlign:"center"
},
InputFieldView:{
    width:windowWidth/1.2,
    height:windowHeight/1.8,
    
},
Name:{
    fontSize:20,
    fontWeight:"bold",
    color:TextColor,
    marginHorizontal:5,
    marginTop:10,
    
},
input:{
    width:windowWidth/1.2,
    height:windowHeight/15,
    borderRadius:10,
    borderColor:"#7DC943",
    borderWidth:1,
    paddingLeft:20,
    marginTop:10,
    backgroundColor:"#F3F4F6"
},
Login:{
width:windowWidth/1.2,
height:windowHeight/14,
alignItems:"center",
justifyContent:"center",
borderRadius:20,
flexDirection:"row",

},
next:{
    fontSize:20,
    color:Color,
    marginLeft:100

},
arrow:{
    marginLeft:100
},
email:{
    width:windowWidth/1.2,
    height:windowHeight/15,
    alignItems:"center",
    flexDirection:'row',
    marginTop:30,
},
save:{
    fontSize:14,
    textAlign:"center",

},
address:{
    color:LoginColor,
    marginTop:15,
    fontSize:14,
    textAlign:"right",
    marginLeft:-36,
    textAlign:"center"
  
},

})    