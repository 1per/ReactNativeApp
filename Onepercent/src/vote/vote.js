import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, Modal, TouchableHighlight} from 'react-native';
import VoteStart from './component/voteStart'

export default class Vote extends Component<Props> {

    state = {
        question: '지금 우리 동네 날씨는 몇도?',
        answer: [
            {
                id: 'answer1',
                value: '35',
                selected: false,
            },
            {
                id: 'answer2',
                value: '36',
                selected: false,
            },
            {
                id: 'answer3',
                value: '37',
                selected: false,
            },
            {
                id: 'answer4',
                value: '38',
                selected: false,
            },
        ],
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {answer} = this.state;
        return (
            <View style={styles.container}>
                <Text style={[styles.title, {}]}>오늘의 질문</Text>
                <Text style={styles.question}>Q. {this.state.question}</Text>

                <VoteStart answer={answer}></VoteStart>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: '#fafafa'
    },
    title: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 12
    },
    question: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
