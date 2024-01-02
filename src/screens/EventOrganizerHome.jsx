import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function EventOrganizerHome({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/b10.jpg')} style={styles.logo} />
                <View style={styles.content}>
                    <Text style={styles.title}>“Our app connects you with a highly targeted audience of individuals and event  searching for venues.”</Text>
                    <TouchableOpacity style={styles.roundButton} onPress={() => navigation.navigate('NewVenueForm')}>
                        <Text style={styles.buttonText}>Add Your Venue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundButton} onPress={() => navigation.navigate('EventOrganizerBooking')}>
                        <Text style={styles.buttonText}>Your bookings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 5,
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '50%',
        marginBottom: 10,
        resizeMode: 'stretch',
    },
    roundButton: {
        width: 150,
        height: 150,
        borderRadius: 75, // Half of width/height to create a round shape
        backgroundColor: 'black', // Replace with desired button color
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

