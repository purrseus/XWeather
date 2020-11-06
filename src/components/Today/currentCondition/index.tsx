/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
  icon: any;
  index: string;
}

const CurrentCondition: FC<Props> = ({ name, icon, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.95} style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>{index}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CurrentCondition;
