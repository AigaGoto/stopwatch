import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Display} from './components'
import {styles, buttons, btnText} from './assets/styles/style'

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
          <Button text={'Start'} btnStyle={buttons.startBtn} btnTextStyle={btnText.start} onPress={startWatch}/>
        )}
        {time > 0 && intervalId && (
          <Button text={'Stop'} btnStyle={buttons.stopBtn} btnTextStyle={btnText.stop} onPress={stopWatch} />
            )}
        {time > 0 && !intervalId && (
          <React.Fragment>
            <Button text={'Reset'} btnStyle={buttons.resetBtn} btnTextStyle={btnText.reset} onPress={resetWatch}/>
            <Button text={'Start'} btnStyle={buttons.startBtn} btnTextStyle={btnText.start} onPress={startWatch}/>
          </React.Fragment>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App