import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  toggleContainer: {
    height: '7%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  innerToggle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleBtnTxt: {
    color: 'black',
  },
});
export default styles;
