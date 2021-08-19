import React from 'react';
import {
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Details = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.image}
        source={require('../../../Resources/Finance.png')}
      />
      <Text style={styles.title}>Lorem Ipsum dolor</Text>
      <Text style={styles.details}>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Take me back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;
