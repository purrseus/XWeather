/**
 * @format
 */

import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
  },
  overlay: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#0003',
  },
  wrapperInput: {
    position: 'absolute',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 70,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
    alignItems: 'center',
    paddingLeft: 10,
  },
  textInput: {
    flexGrow: 1,
    height: 45,
    padding: 10,
  },
  container: {
    marginTop: 100,
  },
  curConditions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  notFound: {
    width: Dimensions.get('window').width,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default styles;
