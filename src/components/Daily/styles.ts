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
    padding: 15,
  },
  content: {
    justifyContent: 'center',
  },
  date: {
    width: 150,
    fontSize: 16,
  },
  description: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#888',
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
  },
  tempMin: {
    width: 35,
    fontSize: 14,
    textAlign: 'right',
    color: '#888',
  },
});

export default styles;
