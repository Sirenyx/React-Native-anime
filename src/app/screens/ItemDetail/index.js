import React, { useContext } from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from "react-native";
import styles from "./styles";
import ThemeContext from '@context/themeContext';

function ItemDetail ({route}) {
    const {title, author, description, image} = route.params;
    const { isLightTheme } = useContext(ThemeContext);
    return (
        <SafeAreaView style={[styles.container, isLightTheme && styles.containerDark]}>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.img}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={[styles.authorContainer, isLightTheme && styles.authorContainerDark]}>
                <Text style={styles.author}>Autor: {author}</Text>
            </View>
            <ScrollView style={styles.descriptionContainer}>
                <Text style={[styles.description, isLightTheme && styles.descriptionDark]}>{description}</Text>
            </ScrollView>
            <Text>
                Workshop React Native
            </Text>
        </SafeAreaView>
    )
}

export default ItemDetail;