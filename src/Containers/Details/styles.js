import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: { flex: 1 },
  image: {
    height: (width - 60) / 1.37,
    aspectRatio: 1.37,
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Manrope-Regular',
    fontSize: 25,
    color: 'black',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  details: {
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    color: 'grey',
    marginHorizontal: 30,
  },
  button: {
    marginHorizontal: 100,
    alignItems: 'center',
  },
  buttonText: {
    borderWidth: 2,
    borderColor: 'rgb(242, 83, 105)',
    borderRadius: 5,
    padding: 5,
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    color: 'rgb(242, 83, 105)',
  },
});
