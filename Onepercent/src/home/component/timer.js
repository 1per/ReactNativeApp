import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { formatYYMMDD } from './util.js';

class Timer extends Component {
    constructor(props) {
        super(props);

        const today = formatYYMMDD(new Date());

        this.state = {
            nowData: {
                time: '00:00',
                title: '상태',
                subTitle: '부가설명'
            },
            timePoint: [
                {
                    title: '투표 준비 중',
                    subTitle: '투표 시작까지 남은 시간',
                    time: new Date(today+' 6:00:00')
                },
                {
                    title: '투표 중',
                    subTitle: '투표 종료까지 남은 시간',
                    time: new Date(today+' 14:00:00')
                },
                {
                    title: '결과 집계 중',
                    subTitle: '당첨자 발표까지 남은 시간',
                    time: new Date(today+' 19:00:00')
                },
                {
                    title: '당점자 발표 중',
                    subTitle: '투표 시작까지 남은시간',
                    time: new Date(today+' 21:00:00')
                }
            ]
        }

        this.startTimer = this.startTimer.bind(this);
        this.setTimer = this.setTimer.bind(this);
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer () {
        this.setTimer();
        this.timer = setInterval(() => this.setTimer(), 1000)
    }

    setTimer() {
        var { timePoint } = this.state;
        var time = '', title = '', subTitle = '';
        var now = new Date();
        var hh,mm,ss;
        for( var i= 0; i<timePoint.length; i++) {
            var gap = now.getTime() - timePoint[i].time.getTime();

            if(gap < 0) {
                gap = Math.floor( -gap/ 1000);
                hh = Math.floor(gap/60/60);
                mm = Math.floor(gap/60%60);
                ss = Math.floor(gap%60);
                title = timePoint[(i+1)%4].title;
                subTitle = timePoint[(i+1)%4].subTitle;
                break;
            }
        }
        var timeString  = hh + ':' + mm + ':' + ss;
        time = hh + ':' + mm + ':' + ss;
        this.setState({
            nowData : { time, title, subTitle }
        })

        // console.log(timeString);
    }

    stopTimer= () => {
        clearInterval(this.timer);
    }

    render() {
        return (
            <View style={styles.timerContainer}>
                <Image source={require('../../../img/img_home_circle.png')}
                       style={styles.circleBackground} />

                <View  style={styles.circleContent}>
                    <Text style={styles.title}>{this.state.nowData.title}</Text>
                    <Text style={styles.subtitle}>{this.state.nowData.subTitle}</Text>
                    <Text style={styles.timer}>{this.state.nowData.time}</Text>
                </View>
            </View>
        );
    }
}


export default Timer;


const styles = StyleSheet.create({
    timerContainer: {
        marginTop: 30,
        width: 300,
        height: 300,
    },
    circleBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    circleContent: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 70,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#55a0d6'
    },
    subtitle: {
        marginTop: 30,
        // marginBottom: ,
        fontSize: 12,
        color: '#533860'
    },
    timer: {
        fontSize: 35,
        fontWeight: 'bold',
    }
});