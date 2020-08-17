import { StyleSheet } from 'react-native';
import { white, black, pink } from '@constants/colors';

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
        backgroundColor: pink,
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
        backgroundColor: `${pink}75`
    },
    authorContainerDark: {
        backgroundColor: `${pink}85`
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
        color: black,
        fontSize: 14
    },
    descriptionDark: {
        color: white
    }


});

export default styles;