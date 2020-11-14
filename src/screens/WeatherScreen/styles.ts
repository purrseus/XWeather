/**
 * @format
 */

import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: '#0003',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    paddingVertical: 20,
  },
  navigation: {
    transform: [{ rotate: '45deg' }],
  },
  location: {
    color: 'white',
    fontSize: 16,
    fontFamily: '',
    marginLeft: 5,
  },
  text: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  hourlyTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '',
    margin: 8,
  },
  hourly: {
    borderTopWidth: 1,
    borderTopColor: '#FFF2',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF2',
    paddingVertical: 5,
  },
  notFound: {
    width: Dimensions.get('window').width,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  daily: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '',
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 100,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 20,
  },
});

export default styles;
