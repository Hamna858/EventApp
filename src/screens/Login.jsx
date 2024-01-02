import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core'
import { useEffect, useState } from 'react'
import { auth, signIn } from '../../Firebase'


export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("RegisterAs")
        }
      })
  
      return unsubscribe
    }, [])


      const handleLogin = async () => {
        try {
            await signIn(email, password); // Use the email and password states
            // Handle navigation or state changes after successful sign-in
          } catch (error) {
            // Handle any errors that might occur during sign-in
            console.error('Sign-in error:', error);
          }
        };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/login1.png')} style={styles.logo} />
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.inputText}
                    placeholderTextColor="#808080"
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
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text2}>Sign Up</Text>
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
});

