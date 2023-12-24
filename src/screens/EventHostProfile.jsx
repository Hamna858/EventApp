import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';


export default function EventHostProfile() {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <ImageBackground
            source={require('../../assets/b15.jpg')}
            style={styles.background}
        >
        <View style={styles.container}>
            <Text style={styles.heading}>Host Name</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.rectangleButton}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.rectangleButton}>
                    <Text style={styles.buttonText}>Bookings History</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View >
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
        marginBottom: 15,
      },
      rectangleButton: {
        width: '70%',
        height: 90,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      logoutButton: {
        width: '40%',
        height: 50,
        backgroundColor: '#800020',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 140,
      },
      heading: {
        color: 'black',
        fontSize: 50,
        marginBottom: 20,
        fontFamily: 'Carattere_400Regular',
      },
});

