/**
 * @format
 */

import React, { FC } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const MenuBtn: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback>
        <Image source={require('assets/icons/menu.png')} style={styles.image} />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default MenuBtn;
