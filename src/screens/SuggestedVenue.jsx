import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import { Card, Button } from 'react-native-paper';


export default function SuggestedVenue({navigation}) {
    let [fontsLoaded, fontError] = useFonts({
        Carattere_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                    <Text style={styles.heading}>Suggested Venues</Text>
                <View style={styles.container2}>
                    <Card style={styles.cardContainer}>
                        <Card.Title
                            title="Venue Name"
                            subtitle="Address"
                            titleStyle={styles.cardTitle}
                            subtitleStyle={styles.cardSubtitle}
                        />
                        <Card.Cover style={styles.pic} source={require('../../assets/b20.jpg')} />
                        <Card.Cover source={require('../../assets/b19.jpg')} />
                        <Card.Actions>
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel}>Book Now</Button>
                            <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel} onPress={() => navigation.navigate('ViewDetails')}>See Details</Button>
                        </Card.Actions>
                        
                    </Card>
                </View>
                

            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    pic:{
        marginBottom:10,
    },
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
        marginBottom:-10,
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'black',
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

