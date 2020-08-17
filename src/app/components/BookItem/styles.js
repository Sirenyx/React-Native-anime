import { StyleSheet } from 'react-native';
import { darkViolet, lightYellow, pink, black, creme } from '@constants/colors';


const styles = StyleSheet.create({
    bookContainer: {
        flexDirection: "row",
        backgroundColor: pink,
        width: 400,
        borderRadius: 10,
    },
    bookContainerClicked: {
        flexDirection: "row",
        backgroundColor: lightYellow,
        width: 400,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        color: black,
        fontWeight: 'bold',
    },
    titleClicked: {
        fontSize: 18,
        marginTop: 10,
        color: darkViolet,
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    bookDesc: {
        flex: 0.8,
        width: "80%",
        height: 120,
    },
    desc: {
        color: black,
    },

    descClicked: {
        color: creme,

    },
    imgBook: {
        width: "20%",
        height: "85%",
        margin: 10
    },
});

export default styles;