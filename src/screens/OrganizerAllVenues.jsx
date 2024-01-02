import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Card, Button } from 'react-native-paper';


export default function OrganizerAllVenues({navigation}) {
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
                    <Text style={styles.heading}>All Venues</Text>
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
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel} onPress={() => navigation.navigate('OrganizerVenueDetails')}>See Details</Button>
                           
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
                            <Button labelStyle={styles.cardButtonLabel} style={styles.cardButton}>See Details</Button>
                           
                        </Card.Actions>
                    </Card>
                </View>
                <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('NewVenueForm')}>
                <Text style={styles.loginText}>Add new venue</Text>
            </TouchableOpacity>

            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        // marginTop: -90,
    },
    content: {
        flex: 1,
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
    loginBtn: {
        width: 200,
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 170,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
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
        // marginTop: 30,
        width: '100%',
        // marginBottom: 10,
    },
    cardButtonLabel: {
        color: 'white', // Change this color to the desired text color
    },
    heading: {
        color: 'black',
        fontSize: 50,
        marginBottom: 10,
        fontFamily: 'Carattere_400Regular',
    },
});

