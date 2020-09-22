import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'components/button';
import {styles} from './styles';
import {useHandlers} from './hooks/use-handlers';

export const NotifyBody = ({alertData}) => {
  const {handleButtonPress} = useHandlers();
  return (
    <View style={styles.modalRoot}>
      <Text style={styles.title}>{alertData.title}</Text>
      <Text style={styles.text}>{alertData.message}</Text>
      <Button
        buttonStyle={styles.button}
        title="Cancel"
        onPress={handleButtonPress}
      />
    </View>
  );
};
