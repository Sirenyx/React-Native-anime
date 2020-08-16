import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function BookItem({title, author, description, image}){

    const navigation = useNavigation();

    const handleNavigateToDetail = () => navigation.navigate('ItemDetail', {title, author, description, image});

    return(
        <TouchableOpacity onPress={() => {handleNavigateToDetail}}>
            <View  style={styles.bookContainer}>
                <Image style={styles.imgBook} resizeMode="contain" source={{uri: image}}/>
                <View style={styles.bookDesc}>
                    <Text style={styles.title}>{title}</Text>
                       <Text style={styles.subtitle}>{author}</Text>
                    <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BookItem;