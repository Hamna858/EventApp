import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';

export default function OnBoarding({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <ImageBackground
            source={require('../../assets/b5.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>Event Eaze</Text>
                </View>
                <View style={styles.bottom}>
                    <Button buttonColor="white" textColor="black" mode="contained" onPress={() =>
                        navigation.navigate('Welcome')
                    }>
                        Get Started
                    </Button>
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
        paddingBottom: 40, // Adjust this value to add spacing between content and button
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 90,
        marginBottom: 5, // Example margin for the text content
        fontFamily: 'Carattere_400Regular',
    },
});

