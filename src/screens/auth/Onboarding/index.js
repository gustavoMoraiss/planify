import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button/index.js';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/onboarding.png')}
        />
        <View style={styles.footer} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>
        <Button>Log in</Button>
        <Button type={'blue'}>Get started</Button>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
