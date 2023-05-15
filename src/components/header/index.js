import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTxt}>reddit/r/programming</Text>
    </View>
  );
};
export default Header;
