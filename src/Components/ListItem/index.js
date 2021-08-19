import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ListItem = ({ title, subTitle, source, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={source} />
      <View style={styles.rightContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
