import { Text } from 'react-native';
import { LoginScreen } from './src/Presentation/screens/login/LoginScreen.tsx';
import { RegisterScreen } from './src/Presentation/screens/register/RegisterScreen.tsx';
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminHomeScreen } from './src/Presentation/screens/admin/home/AdminHomeScreen';
import { ChangePasswordScreen } from './src/Presentation/screens/common/change_password/ChangePasswordScreen.tsx';
import { CreateCategoryScreen } from './src/Presentation/screens/admin/category/create/CreateCategoryScreen.tsx';
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <LoginScreen/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginScreen}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />      
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />      
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />   
        <Stack.Screen name="CreateCategoryScreen" component={CreateCategoryScreen} />   
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}