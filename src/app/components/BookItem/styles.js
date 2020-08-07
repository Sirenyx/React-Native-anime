import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bookContainer: {
        flexDirection: "row",
        backgroundColor: "#ff82ea",
        width: 400,
        borderRadius: 10,
    },
    bookContainerClicked: {
        flexDirection: "row",
        backgroundColor: "#f8ffad",
        width: 400,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        color: "#000",
        fontWeight: 'bold',
    },
    titleClicked: {
        fontSize: 18,
        marginTop: 10,
        color: "#1f0059",
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
        color: '#000',
    },

    descClicked: {
        color: '#fdffe0',

    },
    imgBook: {
        width: "20%",
        height: "85%",
        margin: 10
    },
});

export default styles;