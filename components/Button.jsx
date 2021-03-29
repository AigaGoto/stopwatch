import React from 'react';
import {Text,  TouchableOpacity } from 'react-native';

export function Button({text, btnStyle, btnTextStyle, onPress}) {
    return (
      <TouchableOpacity style={btnStyle} onPress={() => onPress()}>
        <Text style={btnTextStyle}>{text}</Text>
      </TouchableOpacity>          
    )
}

