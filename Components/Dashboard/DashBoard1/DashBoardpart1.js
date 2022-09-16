import React from 'react'

import { StyleSheet, Dimensions, View, Button, Text, Image, Pressable, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThirdTextColor,backgroundColor, DashboardTextColor, SignUpScreenColor, MiddleFirstColor, MiddleSceondColor, PriceButtonFirstColor, PriceButtonSecondColor, SplashScreenFirstColor, SplashScreenSecondColor, Color, LoginColor } from '../../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Ellipse from '../../../Images/Ellipse.png'
import Vector from '../../../Images/Vector.png'




const DashBoardpart1 = ({ navigation }) => {
    return (
<View style={styles.container}>
<LinearGradient  style={styles.first} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
                <View  style={{flexDirection:"row",justifyContent:"flex-start",alignItems:'center',top:40}}>
<Image style={styles.image} source={require('../../../Images/Dashboard/logoforDashboard.png')}/>
<View onPress={()=>navigation.navigate("DashBoardpart2")} style={styles.box}>
    <Image  source={require("../../../Images/Dashboard/Vectorsetting.png")}/>
</View>
</View>
</LinearGradient >
            
<ImageBackground
            
            source={Ellipse}
            
            style={styles.second} >
                <View style={styles.firstbox}>
<Image style={styles.profile} source={require("../../../Images/Dashboard/DashBoardProfileImage.png")}/>
<View style={styles.inline}>
<Text style={styles.welcome}>Welcome</Text>
<Text style={styles.Micheal}> Micheal Klains</Text>
</View>
</View>
<View style={styles.simpleText}>
  <Text style={styles.owe}>I owe</Text> 
  <Image style={styles.arrow} source={require('../../../Images/Dashboard/Vectorarrow.png')}/> 
</View>
<LinearGradient style={styles.price} start={{x: 1, y: 1}} end={{x:0, y: 0}} colors={[PriceButtonFirstColor, PriceButtonSecondColor]}>
<Text style={styles.Dollar}>$000.00</Text>
</LinearGradient>
<View style={styles.List}>
    <View style={styles.klains}>
<Text  style={styles.Debt}>List of My Debt</Text>
<Image style={styles.bluearrow} source={require('../../../Images/Dashboard/Vectorarrow.png')}/>
</View>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
<View style={styles.status}>
<Text style={styles.intel}>Status</Text>
</View>
<Text style={styles.view}>Please add debt to view your list and status</Text>
</View>
</View>
<View style={styles.Notification}>
<Text style={styles.not}>Notification</Text>
</View>
</ImageBackground>
<View style={{bottom:-96}}>

            
            <View style={styles.question}>
<Image style={styles.mark} source={require('../../../Images/Dashboard/Vectorquestion.png')}/>
</View>
{/* <View style={styles.Last}> */}
    <Text style={styles.add}>Add new Debt</Text>
{/* </View> */}
<View style={styles.end}>
<LinearGradient style={styles.draft}  start={{x: 0, y: 0}} end={{x:1, y: 1}} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
<Image source={require('../../../Images/Dashboard/Vectorlast.png')}/>
</LinearGradient>  
<Pressable  onPress={()=> navigation.navigate("DashBoard2")}   style={styles.Button}>
<Image source={require('../../../Images/Dashboard/Vectoradd.png')}/>
</Pressable>
</View>

</View>
</View>









    )
}
export default DashBoardpart1;
const styles = StyleSheet.create({
container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#EBEBEB",
        alignItems:"center"
},
first: {
        width: windowWidth / 1,
        height: windowHeight / 3,
        // justifyContent: 'center',
        alignItems: "center",
},
image: {

        width: 149.93,
        height: 34.72,
        marginLeft: 90,
        
},
box: {
        width: windowWidth / 9,
        height: windowHeight / 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Color,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 30
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
        height: windowHeight/10,
        backgroundColor:backgroundColor,
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",marginTop:-40

    },
    profile: {
        width: 54,
        height: 54,
        borderRadius: 50,
        marginLeft: 10
    },
    inline: {
        width: windowWidth / 2,
        height: windowHeight / 15,
        marginLeft: 10
    },
    welcome: {
        fontSize:18,
        fontWeight: "bold",
        color: DashboardTextColor,
        marginLeft:5
    },
    Micheal: {
      fontSize:18,
        fontWeight: "bold",
        color: DashboardTextColor,
        alignItems:"center"
    },
    simpleText: {
        width: windowWidth/1.1,

        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'flex-start'
        margin:10
    },
    owe: {
       fontSize:18,
        color: Color,
        fontWeight: "bold",
        marginLeft:20

    },
    arrow: {
        width: 9,
        height: 6,
        marginTop: 5

    },
    price: {
        width: windowWidth/1.1,
        height: windowHeight/10,
        backgroundColor: Color,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center"
    },
    Dollar: {
        fontSize: 25,
        color: Color
    },
    List: {
        width: windowWidth/1.1,
        height: windowHeight/6,
        backgroundColor:backgroundColor,
        // justifyContent:"center",
        marginTop: 20,
        borderRadius: 20,
    },
    klains: {
        width: windowWidth / 2,
        height: windowHeight / 20,
        flexDirection: "row",
        alignItems:"center",
        margin:10
        // justifyContent: 'flex-start',

    },
    Debt: {
        fontSize:18,
        // marginTop: 10,
        marginLeft: 10,
        color: ThirdTextColor,
        fontWeight: "bold"

    },
    bluearrow: {
        width: 9,
        height: 7,
        tintColor:"#1A64F5",
        marginLeft: 10


    },
    status: {
        
        borderColor: ThirdTextColor,
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    intel: {
        fontSize:10,
        color: ThirdTextColor,
        margin:8    
    },
    view: {
        fontSize:12,
        // marginTop: 10,
        marginLeft:10,
        color: ThirdTextColor

    },
    Notification: {
        width: windowWidth / 1.1,
        height: windowHeight / 5,
        backgroundColor:backgroundColor,
        marginTop: 10,
        borderRadius: 20,
        elevation:10,
        shadowColor:"black"

    },
    not: {
        width: 103,
        height: 17.73,
        margin: 10,
        color: ThirdTextColor,
        fontWeight: 'bold'
    },
    question: {
        width: windowWidth / 1,
        height: windowHeight / 25,
        // marginTop: 140,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    mark: {
        width: 27,
        height: 27,
right:20
    },
    Last: {
        width: windowWidth,
        height: windowHeight / 29,
        alignItems: 'center',

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