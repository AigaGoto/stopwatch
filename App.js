import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState()

  const startWatch = () => {
    const startTime = new Date().getTime()
    const id = setInterval(() => {
      setTime(new Date().getTime() - startTime + time)
    }, 10)
    setIntervalId(id)
  }

  const stopWatch = () => {
    clearInterval(intervalId)
    setIntervalId(null)
  }

  const resetWatch = () => {
    setTime(0)
  }

  const formatDisplay = (number) => {
    // 一桁の場合は、前に0をつける
    // 返却は文字列型になる
    if (number < 10) {
      number = '0' + number
    }
    return number
  }

  return (
    <View style={styles.container}>
      <View style={displays.displayContainer}>
        <Text style={displays.timer}>{formatDisplay(Math.floor(time / (60 * 1000)))}</Text>
        <Text style={displays.colon}>:</Text>
        <Text style={displays.timer}>{formatDisplay(Math.floor(time / (1000)) % 60)}</Text>
        <Text style={displays.colon}>:</Text>
        <Text style={displays.timer}>{formatDisplay(Math.floor((time % 1000) / 10))}</Text>
      </View>
      <View style={{position: 'relative'}}>
      {time === 0 && (
        <TouchableOpacity style={buttons.startBtn} onPress={() => startWatch()}>
          <Text style={btnText.start}>Start</Text>
        </TouchableOpacity>
      )}
      {time > 0 && intervalId && (
        <TouchableOpacity style={buttons.stopBtn} onPress={() => stopWatch()}>
            <Text style={btnText.stop}>Stop</Text>
          </TouchableOpacity>
      )}
      {time > 0 && !intervalId && (
        <View style={{flexDirection: 'row'}}> 
          <TouchableOpacity style={buttons.resetBtn} onPress={() => resetWatch()}>
            <Text style={btnText.reset}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttons.startBtn} onPress={() => startWatch()}>
            <Text style={btnText.start}>Start</Text>
          </TouchableOpacity>          
        </View>
      )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    left: 96,
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 70,
    margin: 4,
    textAlign: 'center',
    justifyContent: 'center'
  },
});

const displays = StyleSheet.create({
  displayContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timer: {
    width: 100,
    fontSize: 80
  },
  colon: {
    width: 20,
    fontSize: 80
  }
});

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
  }
})

export default App