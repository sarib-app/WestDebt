import React from 'react'

import { StyleSheet, Dimensions, View, Button, Text, Image, Pressable, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ThirdTextColor,backgroundColor,ProfileTextColor, DashboardTextColor, SignUpScreenColor, MiddleFirstColor, MiddleSceondColor, PriceButtonFirstColor, PriceButtonSecondColor, SplashScreenFirstColor, SplashScreenSecondColor, Color, LoginColor } from '../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Ellipse from '../../Images/Ellipse.png'
import Vector from '../../Images/Vector.png'



const adddebt = ({ navigation }) => {
    return (
<View style={styles.container}>
<LinearGradient style={styles.first} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<View style={{alignItems:'center',top:40}}>
<Image style={styles.image} source={require('../../Images/Dashboard/logoforDashboard.png')}/>
<View style={styles.back}>
<Pressable  onPress={()=>navigation.goBack("DashBoard3")} style={styles.backbutton}>
    <View style={styles.backarrow}>
        <Image style={styles.leftarrow} source={require('../../Images/Dashboard/Leftarrow.png')}/>
    </View>
<Text style={styles.of}>Back</Text>
</Pressable>
<Text style={styles.headertext}>Add Debt</Text>
</View>

</View>
</LinearGradient >
<ImageBackground source={Ellipse} style={styles.second} >
<View style={styles.firstbox}>
<Text style={[styles.old,{marginLeft:45}]}>Creditor’s Name</Text>
<TextInput style={styles.inputField} placeholder={"Enter here"}placeholderTextColor={"rgba(47, 118, 255, 0.2)"} />
</View>


<View style={styles.List}>
<Text style={styles.old}>Type of Debt</Text>
<TextInput style={styles.input} placeholder={"Enter here"}  placeholderTextColor={" rgba(34, 139, 82, 0.2)"}/>
<Text style={styles.old}>Address</Text>
<TextInput style={styles.input} placeholder={"Enter here"} placeholderTextColor={" rgba(34, 139, 82, 0.2)"}/>
<Text style={styles.old}>Enter Account Number</Text>
<TextInput style={styles.input} keyboardType="number-pad" placeholder={"0000 xxxx xxxx xxxx"} placeholderTextColor={"#228B52"}/>
<Text style={styles.old}>Total Amount Due</Text>
<TextInput style={styles.input} keyboardType="number-pad" placeholder={"$000.00"} placeholderTextColor={"#228B52"}/>
</View>

</ImageBackground>
<View style={styles.Delete}>
            <Text style={styles.Debt}>Delete Debt</Text>

</View>
<View style={styles.view}>
<View style={styles.cross}>
<Image style={styles.crossimage} source={require("../../Images/addDebt/cross.png")}/>
</View>
<View style={styles.Button}>
    <Text style={styles.Creditor}>Add Debt</Text>
    <Image style={styles.arrow} source={require('../../Images/SignUp/arrow.png')}/>
</View>
</View>
<View style={{bottom:-100}}>
<View style={styles.end}>
<Text style={styles.DashBoard}>Dashboard</Text>
<LinearGradient style={styles.draft}  start={{x: 0, y: 0}} end={{x:1, y: 1}} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<Image style={styles.add} source={require('../../Images/Dashboard/Vectorlast.png')}/>
</LinearGradient>  
</View>

</View> 


        </View>









    )
}
export default adddebt;
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#EBEBEB"
    },
    first: {
        width: windowWidth / 1,
        height: windowHeight / 3,
        alignItems: "center",
        

    },
    image: {

        width: 149.93,
        height: 34.72,
    },
    headertext:{
fontSize:18,
color:Color,
fontWeight:"700",
marginTop:10,
marginRight:70,
textAlign:"center",
    },
    backbutton:{
        width:80,
        height:27,
        backgroundColor:"rgba(47, 118, 255, 1)",
        alignItems:"center",
        justifyContent:"flex-start",
        marginTop:10,
        flexDirection:"row",
        borderRadius:20,
        marginLeft:14
    },
  
    back:{
      width:windowWidth/1.3,
      height:windowHeight/19,
      marginTop:20,
      marginRight:100,
      justifyContent:"space-between",
      flexDirection:'row',
      alignItems:"center" ,
      marginLeft:15
    },
    of:{
       fontSize:16,
       fontWeight:"400",
       color:Color,
       marginHorizontal:6
        
    },
    backarrow:{
        width:27,
        height:27,
        borderRadius:30,
        backgroundColor:Color, 
        justifyContent:"center",
        alignItems:"center"
        


    },
    leftarrow:{
        width:5,
        height:9
    },

    second: {
        width:"100%" ,
        height: 400,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 190,
        marginTop: -100
    },
    firstbox: {
        width: windowWidth/1.1,
        height: windowHeight/8,
        backgroundColor:backgroundColor,
        borderRadius: 15,
        marginTop:-10

    },
    inputField:{
        width:windowWidth/1.3,
        height:windowHeight/20,
        marginLeft:28,
        marginTop:5 ,
        borderRadius:30 ,
        paddingLeft:20,
        borderColor:"rgba(40, 160, 93, 1)",
        borderWidth:1,
        backgroundColor:"#F9F9F9" ,
        
     },


List: {
        width: windowWidth/1.1,
        height: windowHeight/2.1,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        elevation:1,
        shadowColor:"black",
        marginTop:10

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
        height:windowHeight/15,
        marginLeft:28,
        marginTop:5 ,
        borderRadius:10 ,
        paddingLeft:20,
        borderColor:"rgba(40, 160, 93, 1)",
        borderWidth:1,
        backgroundColor:"#F9F9F9"
      },
view:{
      width:windowWidth/1.1,
      height:windowHeight/12,
      marginTop:-20,
      flexDirection:"row",
      justifyContent:"flex-start" ,
      alignItems:"center",
      marginLeft:17,
    },
crossimage:{
width:15,
height:15
    },
cross:{
        width:35,
        height:35,
        borderColor:"red",
        borderWidth:1,
        borderRadius:30,
        justifyContent:'center',
        alignItems:"center",
    },
Button: {
    width: windowWidth / 1.4,
    height:windowHeight/15 ,
    marginLeft: 15,
    backgroundColor: "rgba(167, 167, 167, 1)",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection:"row",
},
Creditor:{
color:Color,
fontSize:18,
marginLeft:90

},
arrow:{
marginLeft:50
},
add: {
    color: ThirdTextColor,
    alignSelf:"center"
},
DashBoard:{
    fontSize:8,
    color:ThirdTextColor,
},
    end: {
        width: windowWidth,
        height: windowHeight / 12,
        justifyContent:"center",
        alignItems:"center",
        bottom:100
    },
    draft: {
        width: 90,
        height: 43,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center"
    },
    add:{
        width:22,
        height:21
    },
    Delete:{
        width:windowWidth,
        height:windowHeight/22,
        marginTop:55,
        marginLeft:20,
        justifyContent:"center"
    },
    Debt:{
        fontSize:8,
        color:"red",
        fontWeight:"400"
    }


})