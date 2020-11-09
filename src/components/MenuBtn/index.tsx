/**
 * @format
 */

import React, { FC } from 'react';
import { Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const MenuBtn: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
          Keyboard.dismiss();
        }}
      >
        <View style={styles.wrapper}>
          <Image
            source={require('assets/icons/menu.png')}
            style={styles.image}
          />
          {/* <Icon size={25} name="menu" /> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MenuBtn;
