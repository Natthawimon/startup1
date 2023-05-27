import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login';
import Loginphone from './Component/Loginphone';
import Register from './Component/Register';
import Mainpage1 from './Component/Mainpage1';
import Mainpage2 from './Component/Mainpage2';
import Mainpage3 from './Component/Mainpage3';
import Services1 from './Component/Services1';
import Choicepage from './Component/Choicepage';
import Paypage from './Component/Paypage';
import Loadwaiting from './Component/Loadwaiting';
import ProfileScreen from './Screen/ProfileScreen';


const Stack = createNativeStackNavigator();



const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator>
       

       


      
      
        <Stack.Screen
          name="Services1"
          component={Services1}
          options={{ headerShown: false }} />
          
        <Stack.Screen
          name="Choicepage"
          component={Choicepage}
          options={{ headerShown: false }} />

       

</Stack.Navigator>
      
    </NavigationContainer>



  )
};
export default App