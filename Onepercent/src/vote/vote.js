import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, Modal, TouchableHighlight} from 'react-native';
import VoteStart from './component/voteStart'
import VoteEnd from './component/voteEnd'

export default class Vote extends Component<Props> {

    state = {
        voteState: true,
        question: '지금 우리 동네 날씨는 몇도?',
        answer: [
            {
                id: 'answer1',
                value: '35',
                selected: false,
                percent: 30,
            },
            {
                id: 'answer2',
                value: '36',
                selected: false,
                percent: 40,
            },
            {
                id: 'answer3',
                value: '37',
                selected: false,
                percent: 10,
            },
            {
                id: 'answer4',
                value: '38',
                selected: false,
                percent: 20,
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
                {
                    this.state.voteState == true ?
                        <VoteStart answer={answer}></VoteStart> : <VoteEnd answer={answer}></VoteEnd>
                }
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
