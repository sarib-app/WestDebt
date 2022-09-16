import React from 'react'

import { StyleSheet, Dimensions, View, Button, Text, Image, Pressable, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThirdTextColor,backgroundColor,ProfileTextColor, DashboardTextColor, SignUpScreenColor, MiddleFirstColor, MiddleSceondColor, PriceButtonFirstColor, PriceButtonSecondColor, SplashScreenFirstColor, SplashScreenSecondColor, Color, LoginColor } from '../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Ellipse from '../../Images/Ellipse.png'
import Vector from '../../Images/Vector.png'



const DashBoard2 = ({ navigation }) => {
    return (
<View style={styles.container}>
<LinearGradient style={styles.first} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:'center',top:40}}>
<Image style={styles.image} source={require('../../Images/Dashboard/logoforDashboard.png')}/>
<View style={styles.box}>
    <Image source={require("../../Images/Dashboard/Vectorsetting.png")}/>
</View>
</View>
</LinearGradient >
<ImageBackground source={Ellipse} style={styles.second} >
<View style={styles.firstbox}>
<Text style={styles.text}>Profile</Text>
<View style={{justifyContent:"center",alignItems:"center"}}>
<Image style={styles.profile} source={require("../../Images/Dashboard/Maskgroup.png")}/>
<View style={styles.upload}>
    <Text style={styles.photo}>Upload</Text>
    <View>
        <Image  style={styles.arrowTop} source={require("../../Images/Dashboard/arrowTop.png")}/>
        <Image style={styles.backline} source={require("../../Images/Dashboard/backline.png")}/>
    </View>
    </View>    
<View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
<Text style={styles.Micheal}>Micheal Klains</Text>

<Image style={styles.edit} source={require('../../Images/Dashboard/edit.png')}/>
<Image style={styles.pencil} source={require('../../Images/Dashboard/pencil.png')}/>
</View>
</View>
</View>
<View style={styles.List}>
<Text style={styles.Debt}>Email</Text>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:"center",marginLeft:10,}}>

<Text style={styles.gmail}>micheal@gmail.com</Text>
<Image style={[styles.edit,{marginTop:-1}]} source={require('../../Images/Dashboard/edit.png')}/>
<Image style={[styles.pencil,{marginTop:-9}]} source={require('../../Images/Dashboard/pencil.png')}/>
</View>
</View>
<View style={styles.Notification}>
<Text style={styles.old}>Old Password</Text>
<TextInput style={styles.input} placeholder={"Enter here"}/>
<Text style={styles.old}>New Password</Text>
<TextInput style={styles.input} placeholder={"Enter here"}/>
<Text style={styles.old}>Confirm Password</Text>
<TextInput style={styles.input} placeholder={"Enter here"}/>
</View>
            </ImageBackground>
 <View style={{bottom:-125}}>
<Text style={styles.add}>Add new Debt</Text>
<View style={styles.end}>
<LinearGradient style={styles.draft}  start={{x: 0, y: 0}} end={{x:1, y: 1}} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<Image source={require('../../Images/Dashboard/Vectorlast.png')}/>
</LinearGradient>  
<Pressable  onPress={()=>navigation.navigate("DashBoard3")}  style={styles.Button}>
<Image    source={require('../../Images/Dashboard/Vectoradd.png')}/>
</Pressable>
</View>

</View> 


        </View>









    )
}
export default DashBoard2;
const styles = StyleSheet.create({
container:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#EBEBEB",
        // justifyContent:"center",
        alignItems:"center"
},
first:{
        width: windowWidth / 1,
        height: windowHeight / 3,
        alignItems: "center",
        

},
image:{

        width: 149.93,
        height: 34.72,
        marginLeft: 90
},
box:{
        width: windowWidth / 9,
        height: windowHeight / 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Color,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 30
},
second:{
        width:"100%" ,
        height: 400,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 190,
        marginTop: -100
},
firstbox:{
        width: windowWidth/1.1,
        height: windowHeight/3.4,
        backgroundColor:backgroundColor,
        borderRadius: 15,
        marginTop:-45

},
gmail:{
       fontSize:18,
    
       color:DashboardTextColor
},
text:{
       fontSize:18 ,
       color:ProfileTextColor,
       fontWeight:"700",
       marginTop:10,
       marginLeft:15
},
profile:{
        width: 140,
        height: 140,
        borderRadius: 100,
},
upload:{
     width:windowWidth/4,
     height:windowHeight/30,
     backgroundColor:Color,
     marginTop:-40,
     marginLeft:160,
     borderColor:"rgba(46, 117, 253, 1)",
     borderWidth:1,
     borderRadius:20,
     justifyContent:"center",
     alignItems:"center" ,
 flexDirection:"row" ,
 elevation:9,
 shadowColor:"black", 
},
photo:{
     color:ThirdTextColor,
     fontWeight:"500"   
},
arrowTop:{
        width:5.02,
        height:7,
        marginLeft:13
},
backline:{
width:13,
height:6,
marginLeft:10
},
Micheal:{
       fontSize:18,
       marginTop:25,
        fontWeight: "bold",
        color: DashboardTextColor
},
List: {
        width: windowWidth/1.1,
        height: windowHeight/10,
        backgroundColor:backgroundColor,
        marginTop: 10,
        borderRadius: 15,
    },
edit:{
    width:15,
    height:15,
    marginTop:25,
    marginLeft:10
    
}, 
pencil:{
   width:10,
   height:10, 
   marginLeft:-6,
   marginTop:13,
},   
Debt: {
        fontSize:18,
        marginTop: 10,
        marginLeft: 25,
        color: ThirdTextColor,
        fontWeight: "bold"

},
Notification: {
        width: windowWidth / 1.1,
        height: windowHeight / 3.3,
        backgroundColor:backgroundColor,
        marginTop: 10,
        borderRadius: 15,
        elevation:6,
        shadowColor:"black",

},
old:{
    fontSize:8,
    color:ThirdTextColor,
    marginTop:15,
    marginLeft:45,
fontWeight:"400"
}, 
input:{
  width:windowWidth/1.3,
  height:windowHeight/19,
  marginLeft:28,
  marginTop:5 ,
  borderRadius:10 ,
  paddingLeft:20,
  borderColor:"rgba(40, 160, 93, 1)",
  borderWidth:1
},
question: {
        width: windowWidth / 1,
        height: windowHeight / 25,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
},
mark: {
        width: 27,
        height: 27,
right:20
},
add: {
        color: ThirdTextColor,
        alignSelf:"center",
        marginLeft:53
},
end: {
        width: windowWidth,
        height: windowHeight / 1.1,
        flexDirection: "row",
},
draft: {
        width: 52,
        height: 52,
        borderRadius: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: "center"
},
Button: {
        width: windowWidth / 1.4,
        height: 52,
        marginLeft: 5,
        backgroundColor: "#2F76FF",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center"
}


})