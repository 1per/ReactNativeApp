import React, {Component} from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight} from 'react-native';

export default class VoteEnd extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            ...props,
        }

    }

    getFlex = (value, state = true) =>
        state == true ? {flex: value} : {flex: 100 - value}

    render() {
        return (
            <View>
                {this.state.answer.map((an, i) =>
                    <View style={styles.voteContainer}>
                        <View style={[this.getFlex(an.percent), styles.onBackground]}></View>
                        <View style={[this.getFlex(an.percent, false), styles.offBackground]}></View>
                        <Text style={styles.voteText} key={an.id}>{an.value}</Text>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    voteContainer: {
        position: 'relative',
        flexDirection: 'row',
        height: 40,
        marginTop: 10,
    },
    voteText: {
        position: 'absolute',
        zIndex: 1,
        height: '100%',
        paddingLeft: 10,
        textAlignVertical: 'center',
        color: '#fff'
    },
    offBackground: {
        backgroundColor: '#ccc',
    },
    onBackground: {
        backgroundColor: '#55a0d6',
    },
});