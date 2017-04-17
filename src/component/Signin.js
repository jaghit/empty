import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            emailaddress: 'null',
            password: 'null'
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.signin}>Signin</Text>
                <Text style={styles.label}>Email address</Text>
                <TextInput style={styles.input} onChangeText={(emailaddress) => this.setState({emailaddress})}></TextInput>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} onChangeText={(password) => this.setState({password})}></TextInput>
                <TouchableOpacity style={styles.signinButton} underlayColor="limegreen" onPress={this.checkSubmit.bind(this)}>
                    <Text style={styles.signinButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
    checkSubmit() {

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    signin: {
        fontSize: 48,
        fontFamily: 'Tangerine',
        marginLeft: 32,
        marginBottom: 32
    },
    label: {
        fontSize: 16,
        marginLeft: 48
    },
    input: {
        marginLeft: 64,
        width: 256
    },
    signinButton: {
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        marginLeft: 64,
        padding: 16,
        width: 256
    },
    signinButtonText: {
        color: 'white',
        fontSize: 16
    }
});
