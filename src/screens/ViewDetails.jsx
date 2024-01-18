import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image,ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function ViewDetails({ route }) {
  const { venue } = route.params;

  const handleBookNow = () => {
    // Use Linking.openURL to open the phone dialer with the specified phone number
    const phoneNumber = `tel:${venue.phoneNumber}`;
    Linking.openURL(phoneNumber);
  };

  return (
    <ImageBackground
            source={require('../../assets/b46.jpg')}
            style={styles.background}
        >
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>{venue.name}</Text>
        <View style={styles.details}>
        <Text style={styles.detailText}>Location: {venue.location}</Text>
        <Text style={styles.detailText}>Rating: {venue.rating}/5</Text>
          <Text style={styles.detailText}>Description: {venue.description}</Text>
      
          
          <Text style={styles.detailText}>Phone Number: {venue.phoneNumber}</Text>
        </View>
        <Card style={styles.cardContainer}>
          <Card.Cover style={styles.pic} source={venue.image} />
        </Card>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleBookNow}>
          <Text style={styles.loginText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contained',
        justifyContent: 'center',
    },
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
    marginTop: 25,
  },
  details: {
    color: 'black',
    marginTop: 20,
  },
  detailText: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'left',
  },
  cardContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
  },
  pic: {
    marginBottom: 20,
    height: 250,
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
