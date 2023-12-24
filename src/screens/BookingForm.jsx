import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';


export default function BookingForm() {
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
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Booking Request Form</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First name"
                    placeholderTextColor="#888"
                    keyboardType="default" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last name"
                    placeholderTextColor="#888"
                    keyboardType="default" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    placeholderTextColor="#888"
                    keyboardType="default" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile number"
                    placeholderTextColor="#888"
                    keyboardType="numeric" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Number of Guests"
                    placeholderTextColor="#888"
                    keyboardType="numeric" // Set keyboard type to numeric
                />
                <TextInput
                    style={styles.input}
                    placeholder="Event details"
                    placeholderTextColor="#888"
                    keyboardType="default" // Set keyboard type to numeric
                />
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
             
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Book venue</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 45,
        fontFamily: 'Carattere_400Regular',
    },
    input: {
        height: 50,
        width: 300,
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
        width: 200,
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

