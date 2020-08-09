import React from 'react';
import {SafeAreaView, Text} from "react-native";
import styles from "./styles";

function ItemDetail () {
    return (
        <SafeAreaView style = {styles.container}>
            <Text>
                Workshop React Native
            </Text>
        </SafeAreaView>
    )
}

export default ItemDetail;