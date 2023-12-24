import {Text, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';


export default function HostVenueSearch() {
    const [selectedDate, setSelectedDate] = useState('');

    const onDateChange = date => {
        setSelectedDate(date);
    };
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <View style={styles.container}>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/b16.jpg')}
                    style={styles.background}
                >
                </ImageBackground>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Search Venue</Text>
                <View style={styles.container1}>

                    <TextInput
                        style={styles.input}
                        placeholder="Search Location"
                        placeholderTextColor="#888"
                    />
                    <Ionicons name="search" size={24} color="black" style={styles.icon} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Number of Guests"
                    placeholderTextColor="#888"
                    keyboardType="numeric" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Budget"
                    placeholderTextColor="#888"
                    keyboardType="numeric" // Set keyboard type to numeric
                />
                <View style={styles.container}>
                    <DatePicker
                        style={styles.datePicker}
                        date={selectedDate}
                        mode="date"
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        minDate="2020-01-01"
                        maxDate="2025-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={onDateChange}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Find Venue</Text>
                </TouchableOpacity>
            </View>

        </View >
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        height: 50,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 10,
        marginLeft: 5,
        color: 'black',
        marginRight: 20,
    },
    icon: {
        marginRight: 5,
        marginLeft: 20,
        marginBottom: 10,
    },
    content: {
        marginTop: -250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '40%',
    },
    text: {
        color: 'black',
        fontSize: 45,
        fontFamily: 'Carattere_400Regular',
    },
    input: {
        height: 50,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: 'black',
    },
    datePicker: {
        width: 200,
        marginBottom: 20,
    },
    loginBtn: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

