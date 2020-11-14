/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 30,
  },
  name: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  temp: {
    color: 'white',
    textAlign: 'center',
    fontSize: 55,
    marginTop: 20,
    letterSpacing: 1,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  description: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 22,
    color: 'white',
  },
  feelsLike: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
