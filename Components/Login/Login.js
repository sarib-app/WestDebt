import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Button, Text, Image, Pressable, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextColor, SignUpScreenColor, SplashScreenFirstColor, SplashScreenSecondColor, Color, LoginColor } from '../Color/Color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({ navigation }) => {
        const [textInputEmail, setTextInputEmail] = useState('');
        const [textInputPassword, setTextInputPassword] = useState('')
        const [ButtonPressed, setButtonPressed] = useState(false)
        const checkTextInput = () => {
             
                    
                setButtonPressed(true)

                if (textInputEmail === "daniyalsaleem" & textInputPassword === "1234") {

                        navigation.navigate("DashBoardpart1")

                }
                else if(textInputEmail === "" && textInputPassword === ""){
                        alert("Input Fields are Empty")
                }
                else {
                        alert("enter the correct email and password")
                        setTextInputEmail("")
                        setTextInputPassword("")
                }
        };
        

    








        return (
                <View style={styles.container}>
                        <Image style={styles.image} source={require('../../Images/WestDebt.png')} />
                        <View style={styles.TextView}>
                                <Text style={styles.started}>Login</Text>
                                <Text style={styles.text}>The App That Destroys Your Debt</Text>
                        </View>
                        <View style={styles.InputFieldView}>
                                <Text style={styles.Name}>Email</Text>
                                <TextInput  autoCapitalize="none"
                    value={textInputEmail}

                                style={[styles.input, { borderColor: textInputEmail === '' && ButtonPressed === true ? "red" : "#7DC943" }]} keyboardType="email-address" onChangeText={(value) => setTextInputEmail(value)} placeholder={"Type Here"} />
                                {textInputEmail===""&& ButtonPressed===true ?<Text style={styles.email}>Email is required</Text>:'' }
                                <Text style={styles.Name}>Password</Text>
                                <TextInput style={[styles.input, { borderColor: textInputPassword === '' && ButtonPressed === true ? "red" : "#7DC943" }]} secureTextEntry={true} onChangeText={(value) => setTextInputPassword(value)} 
                                value={textInputPassword}
                                placeholder={"Type Here"} />
                                {textInputPassword===""&& ButtonPressed===true ?<Text style={styles.email}>Password is required</Text>:'' }
                        </View>
                        <LinearGradient style={styles.Login} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={[SplashScreenFirstColor, SplashScreenSecondColor]}>
                               <Pressable   onPress={() => {
                                                checkTextInput()
                                                
                                        }} style={{flexDirection:"row"}}>

                                <Text style={styles.next}>Login</Text>
                                <Image style={styles.arrow} source={require('../../Images/SignUp/arrow.png')} />
                                        </Pressable>
                        </LinearGradient>
                        <Pressable onPress={() => navigation.navigate("SignUp") }
                         style={styles.sign}>
                                <Text style={styles.up} >Sign Up</Text>

                        </Pressable>
                </View>


        )
}
export default Login;
const styles = StyleSheet.create({
        container: {
                width: windowWidth,
                height: windowHeight,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: SignUpScreenColor
        },
        image: {
                width: 223.2,
                height: 51.69
        },
        TextView: {
                width: windowWidth / 1.2,
                height: windowHeight / 7,
                alignItems: "center",
                justifyContent: "center"
        },
        started: {
                fontSize: 20,
                fontWeight: "bold",
                color: TextColor,
                textAlign: "center"
        },
        text: {
                fontSize: 16,
                textAlign: "center"
        },
        InputFieldView: {
                width: windowWidth / 1.2,
                height: windowHeight / 3,

        },
        Name: {
                fontSize: 20,
                fontWeight: "bold",
                color: TextColor,
                marginHorizontal: 5,
                marginTop: 10,

        },
        input: {
                width: windowWidth / 1.2,
                height: windowHeight / 15,
                borderRadius: 10,

                borderWidth: 1,
                paddingLeft: 20,
                marginTop: 10,
                backgroundColor: "#F3F4F6"
        },
        Login: {
                width: windowWidth / 1.2,
                height: windowHeight / 14,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,

                flexDirection: "row",


        },
        next: {
                fontSize: 20,
                color: Color,
                marginLeft: 120
        },
        arrow: {
                marginLeft: 90
        },
        sign: {
                width: windowWidth / 1.2,
                height: windowHeight / 14,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                marginTop: 20,
                backgroundColor: LoginColor,
                marginBottom: 130
        },
        up: {
                fontSize: 20,
                color: Color,
        },
        email:{
                color:"red",
                fontSize:15,
                fontWeight:"400"
        }
})