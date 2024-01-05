import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';

export default function RegisterAs({navigation}) {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <ImageBackground
            source={require('../../assets/b9.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Register  As</Text>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Tabs')}>
                    <Text style={styles.BtnText}>Event Planner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() =>
                        navigation.navigate('Tabs')
                    }>
                    <Text style={styles.BtnText}>Event Host</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contained',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Carattere_400Regular',
    },
    Btn: {
        elevation: 10, // Shadow on Android
        shadowColor: '#fff', // Shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width: '70%',
        backgroundColor: '#ffff',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    BtnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

