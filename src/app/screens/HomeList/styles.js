import { StyleSheet, BackHandler } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent:'center',
        backgroundColor:'#9245ff',
        alignItems: 'center',
    },
    separator: {
        height: 2,
        margin: 10,
        backgroundColor: '#000'
    },
    button: {
        backgroundColor: '#fc42f6',
        width:"85%",
        height:50,
        marginVertical:20,
        justifyContent:"center",
        borderRadius:10,
        borderWidth:1,
        borderColor: '#04025c',
    },

    buttonTitle: {
        textAlign:"center",
        fontWeight:"bold",
    }

});

export default styles;