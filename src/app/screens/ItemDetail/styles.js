import { StyleSheet, BackHandler } from 'react-native';
import { white, black } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent:'center',
        backgroundColor: white
    },
    containerDark: {
        backgroundColor: black
    },
    img: {
        width: 150,
        height: 250
    },
    imageContainer: {
        zIndex: 3,
        width: '100%',
        height: '50%',
        backgroundColor: black,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    authorContainer: {
        zIndex: 2,
        marginTop: -20,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        width: '100%',
        height: '10%',
        backgroundColor: `${black}75`
    },
    authorContainerDark: {
        backgroundColor: `${white}85`
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: white
    },
    author: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 25,
        fontSize: 16
    },
    descriptionContainer: {
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        width: '100%',
        height: '100%'
    },
    description: {
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 14
    },
    descriptionDark: {
        color: white
    }


});

export default styles;