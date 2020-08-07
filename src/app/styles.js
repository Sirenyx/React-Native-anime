import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    libroContainer: {
        flexDirection: "row",
        backgroundColor: "#bbb",
        width: "80%",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        color: "#000",
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    libroDesc: {
        flex: 0.8,
        width: "75%",
        height: 150,
    },
    imgLibro: {
        width: "25%",
        height: "90%",
        margin: 10
    },
});

export default styles;