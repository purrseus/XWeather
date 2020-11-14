/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface Props {
  name: string;
  icon: string;
  index: string;
}

const CurrentCondition: FC<Props> = ({ name, icon, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.95} style={styles.container}>
      <Icon name={icon} size={30} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>{index}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CurrentCondition;
