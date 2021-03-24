import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {Buttons} from './components/Buttons'

const App = () => {

  const [num, setNum] = useState(0)
  const [time, setTime] = useState(0)
  const [isWork, setIsWork] = useState(false)

  let startTime = 0
  let stockTime = 0
  let stopTime = 0
  
  const startWatch = () => {
    startTime = performance.now()
    setIsWork(true)
  }
  const stopWatch = () => {
    setIsWork(false)
    stockTime = time
  }
  const resetWatch = () => {
    startTime = 0
    stopTime = 0
    setTime(0)
  }

  useEffect(() => {
  })

  return (
    <View style={styles.container}>
      <Text>{num}</Text>
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