import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

import {styles} from './styles';
import {View, Text} from 'react-native';

export const Input = ({text, onChangeText, defaultValue}) => {
  return (
    <View style={styles.inputBlock}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        keyboardType="numeric"
        style={styles.input}
        maxLength={3}
        textAlignVertical="center"
      />
    </View>
  );
};
