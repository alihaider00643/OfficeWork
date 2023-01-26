import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {appLogos} from '../../../utilities/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Auth');
  //   }, 2000);
  // }, []);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Image
        source={appLogos.applogo}
        style={styles.logoStyle}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Splash;
