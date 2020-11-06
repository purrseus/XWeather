/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
  },
  content: {
    justifyContent: 'center',
  },
  date: {
    width: 140,
    fontSize: 15,
  },
  description: {
    textTransform: 'capitalize',
    color: '#888',
  },
  forecast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  tempMax: {
    width: 35,
    fontSize: 16,
    textAlign: 'right',
  },
  tempMin: {
    width: 35,
    fontSize: 14,
    textAlign: 'right',
    color: '#888',
  },
});

export default styles;