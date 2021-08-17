import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity
 
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
 import  Icon  from 'react-native-vector-icons/Ionicons'; 

function Home({navigation}) {
  const renderNews = ({item}) => <NewsCard news={item}onPress={() => navigation.navigate('Newsdetails')} />;

    return (
    <SafeAreaView style={styles.container}>
   {  <Icon name={'menu-outline'} color ={'blue'} size={30} onPress={()=> navigation.openDrawer()}/> }
    <FlatList 
    ListHeaderComponent={() =>(
   
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       {news_banner_data.map(bannerNews => (
          <TouchableOpacity onPress={()=> navigation.navigate('Newsdetails')}>

              <Image
              style={styles.banner_image}
              source={{uri: bannerNews.imageUrl}} />
                       </TouchableOpacity>
       ))}
       </ScrollView>
       )}
       
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
   
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
 image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width ,
  },
});

export default Home;