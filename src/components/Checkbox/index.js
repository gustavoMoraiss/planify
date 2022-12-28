import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles.js';

const Checkbox = ({checked, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

export default React.memo(Checkbox);
