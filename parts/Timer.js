import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import moment from 'moment';

function Timer({interval}){
    const duration = moment.duration(interval)
}
const centiseconds = Math.floor(duration.milliseconds() / 10)

export default class Timer extends Component {
    render() {
        return (
            <Text style={styles.timer}>
                {duration.minutes()}:{duration.seconds()},{centiseconds}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    timer: {
        color: '#fff',
        fontSize: 76,
        fontWeight: '200',
      },
})
