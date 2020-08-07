import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import styles from './styles';

function BookItem({title, author, description, image}){

    const [bgColor, setBgColor] = useState(styles.bookContainer);
    const [titleColor, setTitleColor] = useState(styles.title);
    const [descColor, setDescColor] = useState(styles.desc);

    const handlePress = () => {
        if(bgColor == styles.bookContainer){
            setBgColor(styles.bookContainerClicked);
            setTitleColor(styles.titleClicked);
            setDescColor(styles.descClicked);
        } else {
            setBgColor(styles.bookContainer);
            setTitleColor(styles.title);
            setDescColor(styles.desc);
        }
    }

    return(
        <TouchableOpacity onPress={() => {handlePress()}}>
            <View  style={bgColor}>
                <Image style={styles.imgBook} resizeMode="contain" source={{uri: image}}/>
                <View style={styles.bookDesc}>
                    <Text style={titleColor}>{title}</Text>
                       <Text style={styles.subtitle}>{author}</Text>
                    <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BookItem;