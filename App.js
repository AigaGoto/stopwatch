import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StartBtn, StopBtn, ResetBtn, Display} from './components'

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

  return (
    <View style={styles.container}>
      <Display time={time} />
      <View style={styles.buttons}>
        {time === 0 && (
          <StartBtn startWatch={startWatch}/>
        )}
        {time > 0 && intervalId && (
            <StopBtn stopWatch={stopWatch} />
            )}
        {time > 0 && !intervalId && (
            <React.Fragment>
              <ResetBtn resetWatch={resetWatch}/>
              <StartBtn startWatch={startWatch}/>
            </React.Fragment>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    position: 'relative',
  }
});

export default App