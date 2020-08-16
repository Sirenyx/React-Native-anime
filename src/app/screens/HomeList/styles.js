import { StyleSheet, BackHandler } from 'react-native';
import { white, black } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent:'center',
        backgroundColor:'#9245ff',
        alignItems: 'center',
    },
    darkContainer: {
        backgroundColor: black
    },
    contentContainer: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center'
    },
    separator: {
        height: 2,
        margin: 10,
        backgroundColor: '#000'
    },
    separatorWhite: {
        backgroundColor: white
    }

});

export default styles;