/**
 * @format
 */

import React, { FC } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const MenuBtn: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Image source={require('assets/icons/menu.png')} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MenuBtn;
