import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';

export default function Welcome({ navigation, route }) {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <ImageBackground
            source={require('../../assets/b1.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.circle}>
                        <Text style={styles.text}>Welcome</Text>
                    </View>
                </View>
                {/* <View style={styles.bottom}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>      Login      </Text>
                    </View>
                </View> */}
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button} onPress={() =>
                        navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
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
    bottom: {
        paddingBottom: 90, // Adjust this value to add spacing between content and button
        alignItems: 'center',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100, // Half of the width/height to create a circle
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Carattere_400Regular',
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

