import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    all: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcdcdc'
    },
    main: {
        height: 300,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    header: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
    footer: {
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        gap: 70,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    logo: {
        height: 50,
        width: 150,
        borderRadius: 5
    },
    input: {
        height: '20%',
        width: '60%',
        padding: 5,
        borderBottomWidth: 1,
    }
});