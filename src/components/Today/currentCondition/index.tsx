/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
  icon: any;
  data: string;
}

const CurrentCondition: FC<Props> = ({ name, icon, data }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.95} style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>{data}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CurrentCondition;
