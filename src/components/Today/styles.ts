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
    paddingBottom: 300,
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  temp: {
    textAlign: 'center',
    fontSize: 50,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
  },
  feelsLike: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '700',
  },
});

export default styles;
