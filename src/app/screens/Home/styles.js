import {  StyleSheet } from 'react-native';
import { black } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 

        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "column",
    },
    containerDark: {
        backgroundColor: black
    }, 

    firstSection: {
        width:300,

    },

    animeSection: {
        width:"100%",
    },

	});

export default styles;