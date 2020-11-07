/**
 * @format
 */

import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  content: {
    width: 150,
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10,
  },
  settings: {
    marginBottom: 20,
  },
});

export default styles;
