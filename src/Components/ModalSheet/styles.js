import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: width,
    maxHeight: height - 80,
    bottom: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  content: {
    width: width,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 32,
  },
  pullBar: {
    height: 5,
    width: 100,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  transparentBackground: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: 'black',
  },
});
