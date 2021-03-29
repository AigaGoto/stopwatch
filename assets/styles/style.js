import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  
const btnBase = {
position: 'absolute',
width: 70,
height: 70,
backgroundColor: 'rgba(0,0,0,0.7)',
borderRadius: 35,
margin: 4,
textAlign: 'center',
justifyContent: 'center',
}

export const buttons = StyleSheet.create({
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
textAlign: 'center',
}

export const btnText = StyleSheet.create({
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