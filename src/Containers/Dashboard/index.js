import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from '../../Components/ListItem';
import ModalSheet from '../../Components/ModalSheet';
import styles from './styles';

const Dashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showBottomSheet = () => {
    setModalVisible(true);
  };
  const onBottomSheetDismiss = () => {
    setModalVisible(false);
  };
  const onSelect = () => {
    setModalVisible(false);
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.image}
        source={require('../../../Resources/Trade.png')}
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
      <TouchableOpacity style={styles.button} onPress={showBottomSheet}>
        <Text style={styles.buttonText}>Open sheet</Text>
      </TouchableOpacity>
      <ModalSheet visible={modalVisible} onDismiss={onBottomSheetDismiss}>
        <ListItem
          source={require('../../../Resources/Transfer.png')}
          title="Transfer Cash"
          subTitle="Add and withdraw cash"
          onSelect={onSelect}
        />
        <View style={styles.divider} />
        <ListItem
          source={require('../../../Resources/Save.png')}
          title="Save for something new"
          subTitle="Save & invest towards something in future"
          onSelect={onSelect}
        />
        <View style={styles.divider} />
        <ListItem
          source={require('../../../Resources/Invite.png')}
          title="Invite David"
          subTitle="Give David access to login to their account"
          onSelect={onSelect}
        />
        <View style={styles.divider} />
        <ListItem
          source={require('../../../Resources/Share.png')}
          title="Share profile link"
          subTitle="Others can signup and contribute to this account."
          onSelect={onSelect}
        />
        <View style={styles.divider} />
        <ListItem
          source={require('../../../Resources/Delete.png')}
          title="Delete Account"
          subTitle="Remove an account that is not in use"
          onSelect={onSelect}
        />
      </ModalSheet>
    </SafeAreaView>
  );
};

export default Dashboard;
