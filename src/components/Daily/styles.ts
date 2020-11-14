/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD5',
  },
  content: {
    justifyContent: 'center',
  },
  date: {
    fontFamily: '',
    fontSize: 16,
    color: 'white',
  },
  description: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#DDDA',
  },
  forecast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 65,
    height: 65,
  },
  tempMax: {
    width: 35,
    fontSize: 16,
    textAlign: 'right',
    color: 'white',
  },
  tempMin: {
    width: 35,
    fontSize: 14,
    textAlign: 'right',
    color: '#DDDA',
  },
});

export default styles;
