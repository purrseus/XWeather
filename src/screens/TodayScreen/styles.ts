/**
 * @format
 */

import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    resizeMode: 'cover',
  },
  scroll: {
    marginTop: 80,
  },
  notFound: {
    width: Dimensions.get('window').width,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  curConditions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 80,
  },
});

export default styles;
