import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const ToggleButton = ({
  containerStyle,
  selected = '',
  firstBtnTitle,
  secondBtnTitle,
  thirdBtnTitle,
  fourthBtnTitle,
  onToggleFirst,
  onToggleSecond,
  onToggleThird,
  onToggleFourth,
}) => {
  return (
    <View style={[styles.toggleContainer, containerStyle]}>
      <TouchableOpacity
        // activeOpacity={1}
        onPress={onToggleFirst}
        style={[
          styles.innerToggle,
          {
            backgroundColor: selected !== firstBtnTitle ? 'white' : 'skyblue',
          },
        ]}>
        <Text style={styles.toggleBtnTxt}>{firstBtnTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // activeOpacity={1}
        onPress={onToggleSecond}
        style={[
          styles.innerToggle,
          {
            backgroundColor: selected !== secondBtnTitle ? 'white' : 'skyblue',
          },
        ]}>
        <Text style={styles.toggleBtnTxt}>{secondBtnTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // activeOpacity={1}
        onPress={onToggleThird}
        style={[
          styles.innerToggle,
          {
            backgroundColor: selected !== thirdBtnTitle ? 'white' : 'skyblue',
          },
        ]}>
        <Text style={styles.toggleBtnTxt}>{thirdBtnTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // activeOpacity={1}
        onPress={onToggleFourth}
        style={[
          styles.innerToggle,
          {
            backgroundColor: selected !== fourthBtnTitle ? 'white' : 'skyblue',
          },
        ]}>
        <Text style={styles.toggleBtnTxt}>{fourthBtnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ToggleButton;
