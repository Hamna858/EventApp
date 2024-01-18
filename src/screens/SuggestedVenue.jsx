import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';

const venues = [
    {
      name: 'Pearl Continental (PC) Banquet Hall',
      location: 'Shahrah-e-Quaid-e-Azam, G.O.R. – I, Lahore',
      phoneNumber: '042-111 505 505',
      description: 'Elegant venue with modern amenities in the heart of Lahore.',
      rating: '4.5/5',
      image: require('../../assets/b23.jpeg'),
    },
    {
      name: 'Lahore Grande',
      location: 'Upper Mall Lahore, Lahore, Pakistan',
      phoneNumber: '042-35775471',
      description: 'Grand celebration space located in the upscale Upper Mall area of Lahore.',
      rating: '4.2/5',
      image: require('../../assets/b21.jpg'),
    },
    {
      name: 'Royal Palm Golf and Country Club',
      location: '52 Canal Road, Royal Palm Golf and Country Club, Lahore',
      phoneNumber: '042-111 602 602',
      description: 'Exclusive club offering a picturesque setting for events and celebrations.',
      rating: '4.8/5',
      image: require('../../assets/b25.jpg'),
    },
    {
      name: 'Nishat Hotel',
      location: 'Emporium Mall, Abdul Haque Road, Trade Centre Commercial Area, Phase 2, Johar Town, Lahore',
      phoneNumber: '042-111 646 835',
      description: 'Stylish hotel venue situated in the bustling Johar Town area with easy access to shopping at Emporium Mall.',
      rating: '4.3/5',
      image: require('../../assets/b26.jpg'),
    },
    {
      name: 'Elite Marquee',
      location: '52-B Airport Road, DHA Phase-8 – Ex Park View Block F gate, Lahore',
      phoneNumber: '0321 8240097',
      description: 'Spacious marquee located in DHA Phase-8, offering a premium event experience.',
      rating: '4.6/5',
      image: require('../../assets/b27.jpg'),
    },
    {
      name: 'Serena Hotel, Islamabad',
      location: 'Khayaban-e-Suhrawardy, G-5, Islamabad.',
      phoneNumber: '+92 51 111 133 133',
      description: 'Luxurious hotel venue in Islamabad\'s prime location, perfect for sophisticated gatherings.',
      rating: '4.7/5',
      image: require('../../assets/b28.jpg'),
    },
    {
      name: 'Mohatta Palace, Karachi',
      location: 'Hatim Alvi Road, Clifton, Karachi.',
      phoneNumber: '+92 21 35837669',
      description: 'Historic palace turned event venue, offering a blend of culture and elegance in Clifton.',
      rating: '4.4/5',
      image: require('../../assets/b32.jpg'),
    },
    {
      name: 'Shadi Hall, Faisalabad',
      location: 'P-177, Jinnah Colony, Faisalabad.',
      phoneNumber: '+92 41 111 700 700',
      description: 'Well-equipped hall in Jinnah Colony, Faisalabad, ideal for weddings and events.',
      rating: '4.0/5',
      image: require('../../assets/b29.jpeg'),
    },
    {
      name: "Faletti's Hotel, Lahore",
      location: 'Egerton Road, Lahore.',
      phoneNumber: '+92 42 111 333 333',
      description: 'Iconic hotel on Egerton Road, Lahore, known for its classic charm and hospitality.',
      rating: '4.6/5',
      image: require('../../assets/b31.jpeg'),
    },
    {
      name: "Mövenpick Hotel, Karachi",
      location: 'Club Road, Karachi.',
      phoneNumber: '+92 21 3563 3333',
      description: 'Contemporary hotel on Club Road, Karachi, offering upscale event spaces and amenities.',
      rating: '4.7/5',
      image: require('../../assets/b30.jpg'),
    },
    {
      name: 'Dreamworld Resort, Hotel & Golf Course, Karachi',
      location: 'Adjacent Block "R," Gulshan-e-Maymar, Super Highway, Karachi.',
      phoneNumber: '+92 21 3870 2001',
      description: 'All-in-one resort with a golf course and ample event spaces on the Super Highway in Karachi.',
      rating: '4.2/5',
      image: require('../../assets/b33.jpg'),
    },
    {
      name: 'Pearl Continental Hotel, Peshawar',
      location: 'Khyber Road, Peshawar.',
      phoneNumber: '+92 91 111 505 505',
      description: 'Peshawar\'s premier hotel venue on Khyber Road, offering a blend of luxury and tradition.',
      rating: '4.4/5',
      image: require('../../assets/34.jpg'),
    },
    {
      name: 'Ramada Plaza by Wyndham Karachi Airport Hotel',
      location: 'Star Avenue, Terminal 1, Jinnah International Airport, Karachi.',
      phoneNumber: '+92 21 99242600',
      description: 'Conveniently located hotel near Jinnah International Airport in Karachi with modern event facilities.',
      rating: '4.3/5',
      image: require('../../assets/35.jpg'),
    },
    {
      name: 'Nishat Hotel, Lahore',
      location: '9A, Gulberg III, Mian Mehmood Ali Kasuri Road, Lahore.',
      phoneNumber: '+92 42 111 000 777',
      description: 'Upscale hotel in Gulberg III, Lahore, providing a luxurious setting for events and celebrations.',
      rating: '4.5/5',
      image: require('../../assets/b36.jpg'),
    },
    {
      name: 'Pearl Continental Hotel, Bhurban',
      location: 'Murree Hills, GPO Box 29, Bhurban.',
      phoneNumber: '+92 51 111 505 505',
      description: 'Mountain retreat near Murree Hills, offering a serene ambiance for special occasions.',
      rating: '4.6/5',
      image: require('../../assets/b37.jpg'),
    },
    {
      name: 'Chandni Lounge, Islamabad',
      location: 'Rooftop, Block C, F-6 Markaz, Islamabad.',
      phoneNumber: '+92 332 5033320',
      description: 'Rooftop lounge in F-6 Markaz, Islamabad, providing a chic and trendy space for events.',
      rating: '4.1/5',
      image: require('../../assets/b38.jpg'),
    },
    {
        name: 'Islamabad Marriott Hotel',
        location: 'Aga Khan Road, Shalimar 5, Islamabad.',
        phoneNumber: '+92 51 2826121',
        description: 'Luxury hotel in the heart of Islamabad offering premium event spaces.',
        rating: '4.5/5',
        image: require('../../assets/b39.jpg'),
      },
      {
        name: 'Emporium Mall',
        location: 'Johar Town, Lahore.',
        phoneNumber: '+92 42 111 034 034',
        description: 'One of the largest shopping malls in Pakistan, providing event spaces and entertainment.',
        rating: '4.3/5',
        image: require('../../assets/b40.jpeg'),
      },
      {
        name: 'Karachi Expo Center',
        location: 'University Road, Gulshan-e-Iqbal, Karachi.',
        phoneNumber: '+92 21 99230100',
        description: 'Premier exhibition and convention center in Karachi for large-scale events.',
        rating: '4.6/5',
        image: require('../../assets/b41.jpg'),
      },
      {
        name: 'Pearl Continental Hotel, Rawalpindi',
        location: 'The Mall Road, Saddar, Rawalpindi.',
        phoneNumber: '+92 51 111 505 505',
        description: 'Well-known hotel venue in Rawalpindi, perfect for various occasions.',
        rating: '4.2/5',
        image: require('../../assets/b44.jpeg'),
      },
      {
        name: 'Quaid Residency',
        location: 'Ziarat, Balochistan.',
        phoneNumber: '+92 81 9211115',
        description: 'Historical residence of Quaid-e-Azam Muhammad Ali Jinnah, available for events.',
        rating: '4.7/5',
        image: require('../../assets/b42.jpeg'),
      },
      {
        name: 'Pak-China Friendship Center',
        location: 'G-5, Islamabad.',
        phoneNumber: '+92 51 9223988',
        description: 'Convention center symbolizing the strong ties between Pakistan and China, suitable for events.',
        rating: '4.4/5',
        image: require('../../assets/b45.jpeg'),
      },
  ];

  export default function SuggestedVenue({ navigation, route }) {
    const { location, rating, venueName } = route.params;
  
    let [fontsLoaded, fontError] = useFonts({
      Carattere_400Regular,
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    const handleBookNow = () => {
        // Use Linking.openURL to open the phone dialer with the specified phone number
        const phoneNumber = `tel:${venues.phoneNumber}`;
        Linking.openURL(phoneNumber);
      };
  
    // Filter venues based on search criteria
    const filteredVenues = venues.filter((venue) => {
      // Implement your filtering logic based on location, rating, venueName
      // For simplicity, I'll include a basic example
      return (
        venue.location.toLowerCase().includes(location.toLowerCase()) ||
        venue.phoneNumber.includes(rating) ||
        venue.name.toLowerCase().includes(venueName.toLowerCase())
      );
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Suggested Venues</Text>
          <ScrollView style={styles.scrollContainer}>
            {filteredVenues.map((venue, index) => (
              <Card key={index} style={styles.cardContainer}>
                <Card.Title
                  title={venue.name}
                  subtitle={venue.location}
                  titleStyle={styles.cardTitle}
                  subtitleStyle={styles.cardSubtitle}
                />
                <Card.Cover style={styles.pic} source={venue.image} />
                <Card.Actions>
                  <Button style={styles.cardButton} labelStyle={styles.cardButtonLabel} onPress={handleBookNow}>
                    Book Now
                  </Button>
                  <Button
                    style={styles.cardButton}
                    labelStyle={styles.cardButtonLabel}
                    onPress={() => navigation.navigate('ViewDetails', { venue })}
                  >
                    See Details
                  </Button>
                </Card.Actions>
              </Card>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };



const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
      },
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
        padding: 5,
        marginBottom:15,
    },
    cardTitle: {
        fontSize: 20,
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

