/**
 * @format
 */

import React, { FC } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const MenuBtn: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <View style={styles.wrapper}>
          <Icon size={30} name="menu" color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MenuBtn;
