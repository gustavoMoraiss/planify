import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
};

export default React.memo(Signup);
