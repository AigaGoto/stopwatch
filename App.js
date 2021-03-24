import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {Buttons} from './components/Buttons'

const App = () => {

  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState()

  const startWatch = () => {
    const startTime = new Date().getTime()
    const id = setInterval(() => {
      setTime(new Date().getTime() - startTime)
      // console.log(new Date().getTime())
    }, 10)
    setIntervalId(id)
  }
  const stopWatch = () => {
    console.log("OK")
    clearInterval(intervalId)
  }
  const resetWatch = () => {
    setTime(0)
  }

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => startWatch()}>
        <Text style={styles.start}>スタート</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => stopWatch()}>
        <Text style={styles.end}>ストップ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => resetWatch()}>
        <Text style={styles.reset}>リセット</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 25,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 50,
  },
  start: {
    color: 'green'
  },
  end: {
    color: 'red'
  },
  reset: {
    color: 'white'
  }
});

export default App