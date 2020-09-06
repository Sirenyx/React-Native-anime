import React, { useContext } from 'react';
import { FlatList, View, SafeAreaView, ActivityIndicator } from 'react-native';
import BookItem from '@components/BookItem';
import styles from './styles';
import ThemeContext from "@context/themeContext";
import MangaContext from '@context/mangaContext';
//ESTO ME LISTA LOS ITEMS DE MIS MANGAS//
function HomeList(){

    const {isLightTheme, toggleTheme} = useContext(ThemeContext);

    const {mangas} = useContext(MangaContext);

    const keyExtractor = ({_id}) => `Manga: ${_id}`;

    const itemSeparator = () => <View style={[styles.separator, isLightTheme && styles.separatorWhite]}/>;

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
            
            {mangas.length === 0 ? (
                <ActivityIndicator color="white" size="large"/>
            ) : (<FlatList
                bounces={false}
                data={mangas}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
                contentContainerStyle={[styles.contentContainer, isLightTheme && styles.darkContainer]}
            />)}
        </SafeAreaView>
    );
}

export default HomeList;