import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react'
import { auth,signUps } from '../../Firebase'

export default function Signup({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("RegisterAs")
          }
        })
    
        return unsubscribe
      }, [])


    const handleSignUp = async () => {
        try {
          const user = await signUps(email, password);
          // Handle successful registration, navigate or perform actions
          navigation.navigate('Tabs');
          console.log('New user:', user);
        } catch (error) {
          // Handle error in registration process
          console.error('Error registering user:', error);
          // Show error message or take appropriate actions
        }
      };
    

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/signup1.png')} style={styles.logo} />
            <Text style={styles.title}>SIGNUP</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Full Name"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setFullName(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Forgotpw')}>
                <Text style={styles.text}>Forgot password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,

    },
    text: {
        color: 'black',
        fontSize: 15,
        marginBottom: 20,
        paddingLeft: 170,
    },
    text1: {
        color: 'black',
        fontSize: 15,
        marginTop: 20,
        paddingRight: 120,
    },
    text2: {
        color: 'black',
        fontSize: 17,
        marginTop: -20,
        paddingLeft: 150,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#000',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    googleButton: {
        elevation: 3, // Shadow on Android
        shadowColor: '#000', // Shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width: '80%',
        backgroundColor: '#424242',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
});

