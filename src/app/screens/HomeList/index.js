import React, { useContext } from 'react';
import { FlatList, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { bookData } from '@constants/constants';
import BookItem from '@components/BookItem';
import styles from './styles';
import ThemeContext from "@context/themeContext";
//ESTO ME LISTA LOS ITEMS DE MIS MANGAS//
function HomeList(){

    const {isLightTheme, toggleTheme} = useContext(ThemeContext);

    const keyExtractor = ({id}) => `Libro: ${id}`;

    const itemSeparator = () => <View style={[styles.separator, isLightTheme && styles.separatorWhite]}/>;
    
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
        <SafeAreaView style={[styles.container, isLightTheme && styles.darkContainer]}>
            
            <FlatList
                bounces={false}
                data={bookData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
                contentContainerStyle={[styles.contentContainer, isLightTheme && styles.darkContainer]}
            />
            <View style={styles.separator} />
        </SafeAreaView>
    );
}

export default HomeList;