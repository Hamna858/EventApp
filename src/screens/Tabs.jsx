import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventHostProfile from './EventHostProfile';
import HostVenueSearch from './HostVenueSearch';
import EventHostHome from './EventHostHome';
import EventHostBooking from './EventHostBooking';
import React from 'react';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={EventHostHome} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/home.png')} 
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused? 'black' : 'gray'
                        }} 
            />
                    </View>
                ),

            }}  
            />


<Tab.Screen name="Venue Search" component={HostVenueSearch} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/find.png')} 
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 25,
                            tintColor: focused? 'black' : 'gray'
                        }} 
            />
                            </View>
                ),
            }}  
            />

<Tab.Screen name="Your Booking" component={EventHostBooking} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/booking.png')} 
                        resizeMode="contain"
                        
                        style={{
                            width: 37,
                            height: 30,
                            tintColor: focused? 'black' : 'gray'

                        }} 
            />
                    </View>
                ),

            }}  
            />

<Tab.Screen name="Settings" component={EventHostProfile} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/profile.png')} 
                        resizeMode="contain"
                        style={{
                            width: 45,
                            height: 45,
                            tintColor: focused? 'black' : 'gray'
                        }} 
            />
                            </View>
                ),
            }}  
            />

        </Tab.Navigator>
    );
}

export default Tabs;