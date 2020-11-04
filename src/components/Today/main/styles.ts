/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  color: {
    color: new Date().getHours() > 18 ? 'white' : 'black',
    textShadowColor: new Date().getHours() < 18 ? 'transparent' : 'black',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 20,
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
    marginTop: 20,
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
