import React, { useState } from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';

export default function HostVenueSearch({ navigation }) {
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState('');
    const [venueName, setVenueName] = useState('');

    const handleSearch = () => {
        // Pass search parameters to the SuggestedVenue screen
        navigation.navigate('SuggestedVenue', { location, rating, venueName });
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
                <View style={styles.container1}></View>
      <TextInput
        style={styles.input}
        placeholder="Search by Location"
        placeholderTextColor="#888"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Search by Rating"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={rating}
        onChangeText={(text) => setRating(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        placeholderTextColor="#888"
        value={venueName}
        onChangeText={(text) => setVenueName(text)}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={handleSearch}>
        <Text style={styles.loginText}>Find Venue</Text>
      </TouchableOpacity>
      {/* ... existing code ... */}
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

