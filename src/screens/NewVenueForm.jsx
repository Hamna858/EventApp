import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import firestore from '@react-native-firebase/firestore';

const NewVenueForm = ({ navigation }) => {
  const venuesCollection = firestore().collection('venues'); // Update the collection name

  const [venueName, setVenueName] = useState('');
  const [location, setLocation] = useState('');
  const [minGuests, setMinGuests] = useState('');
  const [maxGuests, setMaxGuests] = useState('');
  const [rate, setRate] = useState('');

  const addVenueToFirestore = async () => {
    try {
      // Use the add method to add a document to the 'venues' collection
      await venuesCollection.add({
        venueName,
        location,
        minGuests,
        maxGuests,
        rate,
      });

      console.log('Venue added successfully!');
      navigation.navigate('OrganizerAllVenues');
    } catch (error) {
      console.error('Error adding venue:', error.message);
    }
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
        <Text style={styles.text}>New Venue Form</Text>
        <TextInput
          style={styles.input}
          placeholder="Venue name"
          placeholderTextColor="#888"
          keyboardType="default"
          onChangeText={(text) => setVenueName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Search Location"
          placeholderTextColor="#888"
          onChangeText={(text) => setLocation(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Minimum guests"
          placeholderTextColor="#888"
          keyboardType="numeric"
          onChangeText={(text) => setMinGuests(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Maximum guests"
          placeholderTextColor="#888"
          keyboardType="numeric"
          onChangeText={(text) => setMaxGuests(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter rate"
          placeholderTextColor="#888"
          keyboardType="default"
          onChangeText={(text) => setRate(text)}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={addVenueToFirestore}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
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
    paddingHorizontal: 20,
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

export default NewVenueForm;
