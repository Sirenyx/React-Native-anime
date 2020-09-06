/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { defaultNavigationOptions } from "@constants/navigation";
import { white, black } from '@constants/colors';

import ThemeContext, { themes } from '@context/themeContext';
import MangaContext from '@context/mangaContext';
import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList';
import ItemDetail from '@screens/ItemDetail';
import { StatusBar } from 'react-native';
import { getMangaList } from '@services/mangaService';

const AppStack = createStackNavigator();

const App = () => {
    const [theme, setTheme] = useState(themes.light);
    const isLightTheme = theme === themes.light;
    const barStyle = isLightTheme ? 'light-content' : 'dark-content';
    const barBg = isLightTheme ? black : white;
    const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);

    const [mangas, setMangas] = useState([]);
    useEffect(() => {
        const getMangas = async () => setMangas(await getMangaList());
        getMangas();
    }, []);

    return ( 
        <MangaContext.Provider value={{mangas}}>
            <ThemeContext.Provider value={{theme, isLightTheme, toggleTheme}}>
                <StatusBar backgroundColor={barBg} barStyle={barStyle} />
                <NavigationContainer >
                    <AppStack.Navigator initialRouteName="Home" screenOptions={defaultNavigationOptions(isLightTheme)}>
                        <AppStack.Screen name="Home" component={ Home } options={{title: "Galar Manga"}} />
                        <AppStack.Screen name="HomeList" component={ HomeList } options={{title: "Manga Titles"}} />
                        <AppStack.Screen name="ItemDetail" component={ ItemDetail } options={{title: "Details"}} />
                    </AppStack.Navigator>
                </NavigationContainer>
            </ThemeContext.Provider>
        </MangaContext.Provider>
    );
};

export default App;