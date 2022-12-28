import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import styles from './styles';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const goToSigIn = () => {
    navigation.navigate('Signin');
  };

  const onCheckboxPress = () => {
    setAgreed(value => !agreed);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder={'First name'} />
      <Input placeholder={'Last name'} />
      <Input placeholder={'E-mail'} />
      <Input placeholder={'Password'} />
      <Input placeholder={'Confirm Password'} />

      <View>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
      </View>

      <Button type={'blue'}>Create Account</Button>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already registered? </Text>
        <TouchableOpacity onPress={goToSigIn}>
          <Text style={styles.footerLink}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
