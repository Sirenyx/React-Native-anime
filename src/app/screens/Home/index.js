import React from 'react';
import { SafeAreaView} from 'react-native';

import BookItem from '@components/BookItem';
import styles from './styles';


const kh = 'https://www.freeiconspng.com/uploads/manga-anime-folder-icon-25.png';


function Home(){
    return(
        <SafeAreaView style={styles.container}>
           
                <BookItem 
                    image={kh} 
                />
        </SafeAreaView>
    )
}

export default Home;