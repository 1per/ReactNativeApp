import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Prize extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>결과</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
});
