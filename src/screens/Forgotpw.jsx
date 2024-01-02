import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Forgotpw({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/forgotpw1.png')} style={styles.logo} />
            <Text style={styles.title}>FORGOT PASSWORD</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <TouchableOpacity style={styles.SubmitBtn} onPress={() => navigation.navigate('RegisterAs')}>
                <Text style={styles.SubmitText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Send code again</Text>
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
    text2: {
        color: 'black',
        fontSize: 17,
        marginTop: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
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
    SubmitBtn: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubmitText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

