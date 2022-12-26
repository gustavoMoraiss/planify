import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import styles from './styles';

const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input placeholder={'E-mail'} />
      <Input placeholder={'Password'} />
      <Button onPress={() => alert('aoba')}>Login</Button>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Not registered? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}> Sign up!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Signin);