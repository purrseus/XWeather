/**
 * @format
 */

import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
  icon: any;
  data: string | number;
}

const CurrentCondition = ({ name, icon, data }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
};

export default CurrentCondition;
