/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  color: {
    color:
      new Date().getHours() >= 6 && new Date().getHours() < 18
        ? 'black'
        : 'white',
    textShadowColor:
      new Date().getHours() >= 6 && new Date().getHours() < 18
        ? 'transparent'
        : '#000',
    textShadowRadius: 2,
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 45,
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  temp: {
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
    color: '#000',
  },
  feelsLike: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
