import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Card, Button } from 'react-native-paper';


export default function EventOrganizerBooking() {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.container1}>
                    <Image source={require('../../assets/b17.png')} style={styles.logo} />
                    <Text style={styles.heading}>Booking Requests</Text>
                </View>
                <View style={styles.container2}>
                    <Card style={styles.cardContainer}>
                        <Card.Title
                            title="Event 1"
                            subtitle="Location"
                            titleStyle={styles.cardTitle}
                            subtitleStyle={styles.cardSubtitle}
                        />
                        <Card.Actions>
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel}>Reject</Button>
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel}>Accept</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={styles.container2}>
                    <Card style={styles.cardContainer}>
                        <Card.Title
                            title="Event 2"
                            subtitle="Location"
                            titleStyle={styles.cardTitle}
                            subtitleStyle={styles.cardSubtitle}
                        />
                        <Card.Actions>
                            <Button labelStyle={styles.cardButtonLabel} style={styles.cardButton}>Reject</Button>
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel}>Accept</Button>
                        </Card.Actions>
                    </Card>
                </View>

            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: -90,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    cardContainer: {
        width: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
    },
    cardButton: {
        backgroundColor: 'black',
        marginTop: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
        marginBottom: 10,
    },
    cardButtonLabel: {
        color: 'white', // Change this color to the desired text color
    },
    heading: {
        color: 'black',
        fontSize: 50,
        marginBottom: 20,
        fontFamily: 'Carattere_400Regular',
    },
});

