import React, { useState } from 'react';
import { FlatList, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { bookData } from './constants';
import BookItem from '@components/BookItem';
import styles from './styles';
//ESTO ME LISTA LOS ITEMS DE MIS MANGAS//
function HomeList({navigation}){

    const keyExtractor = ({id}) => `Libro: ${id}`;

    const itemSeparator = () => <View style={styles.separator}/>;
    
    const handleNavigateToDetail = () => navigation.navigate("ItemDetail");

    const renderItem = ({item}) => {
        const {title, author, description, image} = item;
        return(
            <BookItem
                title={title}
                author={author}
                description={description}
                image={image}
            />
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleNavigateToDetail}>
                <Text style={styles.buttonTitle}>
                    Navigate to Details
                </Text>
            </TouchableOpacity>
            <FlatList
                bounces={false}
                data={bookData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
            />
            <View style={styles.separator} />
        </SafeAreaView>
    );
}

export default HomeList;