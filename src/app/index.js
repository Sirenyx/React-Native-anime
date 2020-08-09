/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList';
import ItemDetail from '@screens/ItemDetail';

const AppStack = createStackNavigator();

const App = () => {
    return ( 
    <NavigationContainer >
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={ Home } options={{title: "Galar Manga"}} />
            <AppStack.Screen name="HomeList" component={ HomeList } options={{title: "Manga Titles"}} />
            <AppStack.Screen name="ItemDetail" component={ ItemDetail } options={{title: "Details"}} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
};

export default App;