import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Button } from 'react-native-paper';


export default function ViewDetails({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Venue Name</Text>
                <View style={styles.details}>
                    <Text style={styles.details}>» Venue address</Text>
                    <Text style={styles.details}>» Contact details</Text>
                    <Text style={styles.details}>» Number of guests</Text>
                    <Text style={styles.details}>» Maximum guests</Text>
                    <Text style={styles.details}>» Rate list</Text>
                </View>
                <Card style={styles.cardContainer}>
                        <Card.Cover style={styles.pic} source={require('../../assets/b20.jpg')} />
                        <Card.Cover style={styles.pic} source={require('../../assets/b19.jpg')} />
                    </Card>
            </View>
            <View style={styles.btn}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={() => navigation.navigate('OrganizerVenueDetails')}>Book Now</Text>
            </TouchableOpacity>
            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    cardButton: {
        backgroundColor: 'black',
        marginTop: 10,
    },
    container: {
        flex: 1,
        padding: 30,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    heading: {
        color: 'black',
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    details: {
        color: 'black',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'left',
    },
    cardContainer: {
        width: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
    },
    pic:{
        marginBottom:10,
        height: 170,
    },
    loginBtn: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    btn: {
        alignItems: 'center',
    },

});

