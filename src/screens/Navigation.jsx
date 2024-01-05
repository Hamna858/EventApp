import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoarding from './OnBoarding';
import Welcome from './Welcome';
import Login from './Login';
import Forgotpw from './Forgotpw';
import Signup from './Signup';
import RegisterAs from './RegisterAs';
import EventOrganizerHome from './EventOrganizerHome';
import EventOrganizerBooking from './EventOrganizerBooking';
import EventHostHome from './EventHostHome';
import NewVenueForm from './NewVenueForm';
import EventHostBooking from './EventHostBooking';
import BookingForm from './BookingForm';
import HostVenueSearch from './HostVenueSearch'
import OrganizerAllVenues from './OrganizerAllVenues';
import ViewDetails from './ViewDetails';
import SuggestedVenue from './SuggestedVenue';
import OrganizerVenueDetails from './OrganizerVenueDetails';
import Tabs from './Tabs';
import EventHostProfile from './EventHostProfile';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
           name="OnBoarding"
            component={OnBoarding}
            options={{title: 'OnBoarding'}}
          />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forgotpw" component={Forgotpw} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="RegisterAs" component={RegisterAs} />
          <Stack.Screen name="EventOrganizerHome" component={EventOrganizerHome} />
          <Stack.Screen name="EventHostHome" component={EventHostHome} />
          <Stack.Screen name="EventOrganizerBooking" component={EventOrganizerBooking} />
          <Stack.Screen name="NewVenueForm" component={NewVenueForm} />
          <Stack.Screen name="BookingForm" component={BookingForm} />
          <Stack.Screen name="EventHostBooking" component={EventHostBooking} />
          <Stack.Screen name="HostVenueSearch" component={HostVenueSearch} />
          <Stack.Screen name="OrganizerAllVenues" component={OrganizerAllVenues} />
          <Stack.Screen name="ViewDetails" component={ViewDetails} />
          <Stack.Screen name="SuggestedVenue" component={SuggestedVenue} />
          <Stack.Screen name="OrganizerVenueDetails" component={OrganizerVenueDetails} />
          <Stack.Screen name="Tabs" component={Tabs}/>
          <Stack.Screen name="EventHostProfile" component={EventHostProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default MyStack;  