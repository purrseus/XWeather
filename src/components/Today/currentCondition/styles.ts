/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: 170,
    height: 80,
    margin: 8,
    padding: 8,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  content: {
    width: '60%',
    marginLeft: 15,
  },
  name: {
    fontWeight: '700',
  },
});

export default styles;
