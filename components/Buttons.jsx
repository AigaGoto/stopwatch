import React, {useState} from 'react';
import {StyleSheet, Text,  TouchableOpacity } from 'react-native';

export function StartBtn(props) {
    return (
      <TouchableOpacity style={buttons.startBtn} onPress={() => props.startWatch()}>
        <Text style={btnText.start}>Start</Text>
      </TouchableOpacity>          
    )
}

export function StopBtn(props) {
    return (
      <TouchableOpacity style={buttons.stopBtn} onPress={() => props.stopWatch()}>
        <Text style={btnText.stop}>Stop</Text>
      </TouchableOpacity>
    )
}

export function ResetBtn(props) {
    return (
      <TouchableOpacity style={buttons.resetBtn} onPress={() => props.resetWatch()}>
        <Text style={btnText.reset}>Reset</Text>
      </TouchableOpacity>
    )
}

const btnBase = {
    position: 'absolute',
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 70,
    margin: 4,
    textAlign: 'center',
    justifyContent: 'center'
  }
  
const buttons = StyleSheet.create({
  startBtn: {
    ...btnBase,
    left: 96,
  },
  stopBtn: {
    ...btnBase,
    left: 96,
  },
  resetBtn: {
    ...btnBase,
    right: 96,
  },
})

const btnTextBase = {
  fontSize: 18,
  fontWeight: '500',
}

const btnText = StyleSheet.create({
  start: {
    ...btnTextBase,
    color: '#1AFF1A',
  },
  stop: {
    ...btnTextBase,
    color: '#FF1A40',
  },
  reset: {
    ...btnTextBase,
    color: 'white',
  },
  lap: {
    ...btnTextBase,
    color: '#11FF44',
  }
})
