/**
 * @format
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF2',
    marginTop: 20,
  },
  componentsTop: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContent: {
    marginLeft: 10,
  },
  title: {
    fontFamily: '',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  index: {
    color: '#DDDD',
    fontFamily: '',
  },
  componentsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
  sunIndex: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
  },
});

export default styles;
