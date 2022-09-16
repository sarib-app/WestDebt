import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import DashBoardpart1 from './Components/Dashboard/DashBoard1/DashBoardpart1';
import DashBoardpart2 from './Components/Dashboard/DashBoard1/DashBoardpart2';
import DashBoard2 from './Components/Dashboard/DashBoard2';
import DashBoard3 from './Components/Dashboard/DashBoard3';
import adddebt from './Components/Add Debt/adddebt';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator 
      initialRouteName='SplashScreen'
      screenOptions={{
        headerShown: false
      }}
      >
          <Stack.Screen 
         name="SplashScreen"
           component={SplashScreen}
        />  
          <Stack.Screen name="Home" component={Home} />  
           <Stack.Screen name="SignUp" component={SignUp} />  
         <Stack.Screen name="Login" component={Login} /> 
         <Stack.Screen name="DashBoardpart1" component={DashBoardpart1} />
         <Stack.Screen name='DashBoardpart2' component={DashBoardpart2}/>
         <Stack.Screen name="DashBoard2" component={DashBoard2} /> 
         <Stack.Screen name="DashBoard3" component={DashBoard3} /> 
          <Stack.Screen name="adddebt" component={adddebt}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
