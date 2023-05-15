import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems:'center',
  },
  emptyComponent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundTxt: {
    color: 'black',
  },
  postContainer: {
    marginHorizontal:'4%',
    marginVertical: '2%',
    paddingHorizontal:10,
    paddingVertical:20,
    height:350,
    width:'90%',
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    marginTop:30,
  },
  cardContainer:{
   width:'100%',
   marginVertical:20,
   marginHorizontal:10,
   paddingHorizontal: 10,
   paddingVertical: 20,
   borderRadius:3,
   shadowRadius: 3,
   shadowOffset:{
    width: -2,
    height: 4,
   },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation:5,
  },
  postImage: {
    height: 150,
    width: '93%',
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop:3,
  },
  textTitle:{
    marginVertical:10,
    textAlign:'center',
    padding:'auto',
    lineHeight: 14,
    color:'black',
  },
});
export default styles;
