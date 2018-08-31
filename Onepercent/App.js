import * as React from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity, Text, Image, TouchableHighlight, TouchableNativeFeedback  } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Home from './src/home/home.js';
import Prize from './src/prize/prize.js';
import More from './src/more/more.js';
import Vote from './src/vote/vote.js';

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'home'},
            { key: 'vote', title: 'vote'},
            { key: 'prize', title: 'prize'},
            { key: 'more', title: 'more'},
        ],
    };



    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const backgroundColor = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? '#55a0d6' : '#535860')
                        ),
                    });
                    var icon;
                    if( route.title == 'home')
                        icon = require('./img/icon_home_off_btn.png');
                    else if(route.title == 'vote')
                        icon = require('./img/icon_vote_off_btn.png');
                    else if(route.title == 'prize')
                        icon = require('./img/icon_prize_off_btn.png');
                    else
                        icon = require('./img/icon_more_off_btn.png');
                    return (
                        <TouchableHighlight
                            key= {i}
                            underlayColor="rgba(255,255,255,0.5)"
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ backgroundColor }}>
                                <Image source={icon} />
                            </Animated.Text>
                        </TouchableHighlight>
                    );
                })}
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>1Percent</Text>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        home: Home,
                        vote: Vote,
                        prize: Prize,
                        more: More
                    })}
                    onIndexChange={index => this.setState({ index })}
                    renderTabBar={this._renderTabBar}
                    // initialLayout={{ width: Dimensions.get('window').width }}
                    style={styles.tabview}
                >
                </TabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#535860',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ccd5e5',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    tabview: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: '#fafafa'
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderTopColor: '#ccd5e5',
        borderTopWidth: 1,
    },
});