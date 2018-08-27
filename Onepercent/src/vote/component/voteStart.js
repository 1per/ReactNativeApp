import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';

export default class VoteStart extends Component<Props> {
    // state = {
    //     modalVisible: false,
    //     selectState: false,
    // };

    constructor(props) {
        super(props);

        this.state = {
            ...props,
            modalVisible: false,
            selectState: false,
        }
    }

    votePress = (id) => {
        console.log('보기선택:'+id);
        this.setState(prevState => ({
            answer: prevState.answer.map(answer => {
                    (answer.id !== id) ?
                        answer.selected = false : answer.selected = true;
                    return { ...answer }
                }
            )
        }))
    }

    submitPress = () => {
        this.setModalVisible(!this.state.modalVisible);

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                {this.state.answer.map((an, i) =>

                    <Text
                        key={an.id}
                        onPress={()=>this.votePress(an.id, an.selected)}
                        style={
                            an.selected == true ? styles.voteOnButton : styles.voteButton
                        } >{an.value}</Text>
                )}

                <Text style={styles.submitButton}
                      onPress={this.submitPress} >투표하기</Text>

                {/* 투표 팝업 */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    presentationStyle="formSheet"
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                        <View style={styles.voteModal}>
                            <Text>선택 하시겠습니까?</Text>

                            <TouchableHighlight
                                underlayColor="rgba(255,255,255,0.5)"
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>취소</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(255,255,255,0.5)"
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>확인</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    voteButton: {
        height: 40,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#ccc',
        color: '#000',
        textAlignVertical: 'center'
    },
    voteOnButton: {
        height: 40,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#55a0d6',
        color: '#000',
        textAlignVertical: 'center'
    },
    voteModal: {
        width: 250,
        height: 100,
        margin: 'auto',
        borderWidth: 1,
        borderColor: '#55a0d6',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    submitButton: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#55a0d6',
        borderRadius: 20,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});