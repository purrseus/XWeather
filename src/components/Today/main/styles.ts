/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  color: { color: new Date().getHours() >= 18 ? 'white' : 'black' },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 80,
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  temp: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 22,
  },
  feelsLike: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
