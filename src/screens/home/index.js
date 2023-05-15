import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Header, ToggleButton} from '../../components';
import styles from './styles';
import moment from 'moment';

const App = () => {
  const [selectedToggle, setSelectedToggle] = useState('News');
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch('https://api.reddit.com/r/pics/hot.json');
      const json = await response.json();
      setData(json?.data?.children);
      console.log(json?.data?.children, 'json');
    } catch (error) {
      console.error(error);
    }
  };
  const renderPosts = ({item}) => {
    return (
      <View style={styles.postContainer}>
      {/* Card start */}
        <View style={styles.cardContainer}>
            <Image
               source={{uri: item?.data?.thumbnail}}
               style={styles.postImage}
               resizeMode="cover"
             />
            <Text style={styles.textTitle}>Author : {item?.data?.author}</Text>
            <Text style={styles.textTitle}>Title : {item?.data?.title}</Text> 
            <Text style={styles.textTitle}>Num comments : {item?.data?.num_comments}</Text> 
            <Text style={styles.textTitle}>Score : {item?.data?.score}</Text>
            <Text style={styles.textTitle}> 
             Date : {moment(item?.createdAt).format('Do MM YYYY')}
            </Text>        
         </View>
        </View>
    );
  };
  const renderIfEmpty = () => {
    return (
      <View style={styles.emptyComponent}>
        <Text style={styles.notFoundTxt}>Data Not Found!</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ToggleButton
        firstBtnTitle="News"
        secondBtnTitle="Top"
        thirdBtnTitle="Popular"
        fourthBtnTitle="Hot"
        selected={selectedToggle}
        onToggleFirst={() => setSelectedToggle('News')}
        onToggleSecond={() => setSelectedToggle('Top')}
        onToggleThird={() => setSelectedToggle('Popular')}
        onToggleFourth={() => setSelectedToggle('Hot')}
      />
      {selectedToggle === 'News' && (
        <View style={styles.mainView}>
          <FlatList
            data={data}
            renderItem={renderPosts}
            keyExtractor={(item, index) => String(index)}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderIfEmpty}
          />
        </View>
      )}
      {selectedToggle === 'Top' && (
        <View style={styles.mainView}>
          <Text>Top</Text>
        </View>
      )}
      {selectedToggle === 'Popular' && (
        <View style={styles.mainView}>
          <Text>Popular</Text>
        </View>
      )}
      {selectedToggle === 'Hot' && (
        <View style={styles.mainView}>
          <Text>Hot</Text>
        </View>
      )}
    </View>
  );
};
export default App;
