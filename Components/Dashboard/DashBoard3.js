import React from 'react'

import { StyleSheet, Dimensions, View, Button, Text, Image, Pressable, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ThirdTextColor,backgroundColor,ProfileTextColor, DashboardTextColor, SignUpScreenColor, MiddleFirstColor, MiddleSceondColor, PriceButtonFirstColor, PriceButtonSecondColor, SplashScreenFirstColor, SplashScreenSecondColor, Color, LoginColor } from '../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Ellipse from '../../Images/Ellipse.png'
import Vector from '../../Images/Vector.png'



const DashBoard3 = ({ navigation }) => {
    return (
<View style={styles.container}>
<LinearGradient style={styles.first} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<View style={{alignItems:'center',top:40}}>
<Image style={styles.image} source={require('../../Images/Dashboard/logoforDashboard.png')}/>
<View style={styles.back}>
<Pressable  onPress={()=>navigation.goBack("DashBoard2")} style={styles.backbutton}>
    <View style={styles.backarrow}>
        <Image style={styles.leftarrow} source={require('../../Images/Dashboard/Leftarrow.png')}/>
    </View>
<Text style={styles.of}>Back</Text>
</Pressable>
<Text style={styles.headertext}>List of My Debt</Text>
</View>

</View>
</LinearGradient >
<ImageBackground source={Ellipse} style={styles.second} >

<View style={styles.List}>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text style={styles.show} >Select Creditor</Text>
{/* <Image style={styles.line} source={require('../../Images/Dashboard/Rectangle.png')}/> */}
    </View>
    <View style={styles.detail}>
<Text style={styles.after}>Your details will show up after you add debt</Text>
    </View>
</View>

</ImageBackground>
<Pressable style={styles.Button} onPress={()=>navigation.navigate("adddebt")}>
    <Text style={styles.Creditor} onPress={()=>navigation.navigate("adddebt")}>Add Creditor</Text>
    <Image style={styles.arrow} source={require('../../Images/SignUp/arrow.png')}/>
</Pressable>
 <View style={{bottom:-125}}>
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
export default DashBoard3;
const styles = StyleSheet.create({
container:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#EBEBEB",
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
},
headertext:{
fontSize:18,
color:Color,
fontWeight:"700",
marginTop:10,
marginLeft:20,
marginRight:30,
textAlign:"center"
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
        marginLeft:15
},
back:{
      width:windowWidth/1.5,
      height:windowHeight/19,
      marginTop:30,
      marginRight:110,
      justifyContent:"space-evenly",
      flexDirection:'row',
      alignItems:"center",
},
of:{
       fontSize:16,
       fontWeight:"400",
       color:Color,
       marginHorizontal:5
        
},
backarrow:{
        width:27,
        height:27,
        borderRadius:30,
        backgroundColor:Color, 
        justifyContent:"center",
        alignItems:"center",
        


},
leftarrow:{
        width:5,
        height:9
},
second:{
        width:"100%" ,
        height: 400,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 190,
        marginTop: -100
},
List:{
        width: windowWidth/1.1,
        height: windowHeight/1.7,
        backgroundColor:backgroundColor,
        borderRadius: 20,
        elevation:3,
        shadowColor:"black",
        opacity:1

},
show:{
       marginTop:20,
       marginLeft:30,
       fontSize:8,
       fontWeight:"400",
       color:"rgba(47, 118, 255, 1)" 
},
detail:{
       width:windowWidth/1.3,
       height:windowHeight/15,
       marginTop:5,
       marginLeft:20,
       borderRadius:15,
       justifyContent:"center",
       alignItems:"center",
       borderColor:"rgba(40, 160, 93, 1)",
       borderWidth:1
        
},
after:{
       fontSize:10,
       color:"rgba(40, 160, 93, 1)" 

},
Button: {
    width: windowWidth / 1.1,
    height:windowHeight/15 ,
    backgroundColor: "#2F76FF",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    marginTop:60,
    flexDirection:"row",
},
Creditor:{
color:Color,
fontSize:18,
marginLeft:120

},
arrow:{
marginLeft:70
},
add: {
    color: ThirdTextColor,
    alignSelf:"center"
},
DashBoard:{
    fontSize:8,
    color:ThirdTextColor,

},
end:{
        width: windowWidth,
        height: windowHeight / 12,
        justifyContent:"center",
        alignItems:"center",
        bottom:100
},
draft:{
        width: 90,
        height: 43,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center"
},
add:{
        width:22,
        height:21
}
})