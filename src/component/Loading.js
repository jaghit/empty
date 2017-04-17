import React, { Component } from 'react';

import {
    Image,
    StyleSheet,
    Text
} from 'react-native';

import Device from 'react-native-device-info';

export default class Loading extends Component {
    render() {
        return(
            <Image source={require('../asset/img/loading.jpg')} style={styles.container}>
                <Text style={styles.appname}>Empty Coffee Cups</Text>
                <Text style={styles.tagline}>~ no coffee ~ no talkee ~</Text>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: Device.height,
        width: Device.width
    },
    appname: {
        color: 'white',
        fontFamily: 'Tangerine',
        fontSize: 64,
        marginTop: 96
    },
    tagline: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic'
    }
});
