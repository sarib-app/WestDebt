import React from 'react';
import { useState } from 'react';
import LinearGradient from "react-native-linear-gradient";
import{SplashScreenSecondColor,SplashScreenFirstColor} from '../Color/Color'
import {StyleSheet,  Dimensions,View,Image}from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const SplashScreen =({navigation })=>{
 const [timePassed, setTimePassed] = useState(false);

        setTimeout(function () {
          setTimePassed(true);
        }, 3000);
      
        if (!timePassed) {
          return (
            <LinearGradient style={styles.container}
               start={{x: 0, y: 1}} end={{x:1, y: 1}} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
              <Image style={styles.image} source={require('../../Images/SplashScreenImage/image.png')} />
            </LinearGradient>
          );
        }
        else if(timePassed===true){

            navigation.navigate("Home");
        }
       




    }
    export default SplashScreen;
const styles=StyleSheet.create({
container:{
    width:windowWidth,
    height:windowHeight,
    justifyContent:"center",
    alignItems:"center"
},
image:{
    width:261.76,
    height:131.9
}

})