/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignItems: 'center',
  },
  today: {
    color: 'white',
    fontSize: 35,
    fontFamily: '',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  date: {
    fontSize: 13,
    fontFamily: '',
    textAlign: 'center',
    color: '#DDDA',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: '',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tempWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  temp: {
    color: 'white',
    fontSize: 60,
    fontFamily: '',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  celsius: {
    color: 'white',
    fontFamily: '',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
  },
  feelsLike: {
    fontFamily: '',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#DDDC',
  },
});

export default styles;
