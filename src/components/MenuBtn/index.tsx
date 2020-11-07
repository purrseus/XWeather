/**
 * @format
 */

import React, { FC } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import styles from './styles';

const MenuBtn: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <View style={styles.wrapper}>
          <Image
            source={require('assets/icons/menu.png')}
            style={styles.image}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MenuBtn;
