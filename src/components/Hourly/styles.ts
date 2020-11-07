/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffff',
    borderRadius: 15,
  },
  wrapperTime: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#292b36',
  },
  time: {
    width: 40,
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 65,
    height: 65,
  },
  temp: {
    width: 55,
    textAlign: 'center',
    fontSize: 22,
  },
  feelsLike: {
    textAlign: 'center',
    width: 120,
  },
});

export default styles;
