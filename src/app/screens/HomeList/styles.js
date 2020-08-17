import { StyleSheet, BackHandler } from 'react-native';
import { white, black, violet } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: violet,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    darkContainer: {
        backgroundColor: violet,
    },
    contentContainer: {
        backgroundColor: white,
        flexGrow: 1,
        alignItems: 'center',
    },
    separator: {
        height: 2,
        margin: 10,
        backgroundColor: black,
    },
    separatorWhite: {
        backgroundColor: white,
    },

});

export default styles;