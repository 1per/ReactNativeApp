import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from './component/timer.js';

export default class Home extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Timer></Timer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
});
