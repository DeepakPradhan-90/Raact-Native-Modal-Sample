import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: width,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#F5F5F5',
  },
  image: {
    height: 50,
    width: 50,
  },
  rightContent: {
    marginLeft: 20,
  },
  title: {
    fontFamily: 'Manrope-Regular',
    fontSize: 20,
    color: 'black',
    marginRight: 30,
  },
  subTitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: 'grey',
    marginRight: 30,
  },
});
