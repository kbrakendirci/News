import React, { Component } from 'react';
import {
    View, 
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    Dimensions,
   
  } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import NewsCard from '../NewsCard';

import news_banner_healt_data from '../../news_banner_healt_data.json';
import news_covid_data from '../../news_covid_data.json';


function Covid({navigation}) {
  const renderNews = ({item}) => <NewsCard news={item}onPress={() => navigation.navigate('Newsdetails')} />;

      return (
      <SafeAreaView style={styles.container}>
        <Icon name={'menu-outline'} color ={'blue'} size={30} onPress={()=> navigation.openDrawer()}/>
      <FlatList 
      ListHeaderComponent={() =>(
        
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {news_banner_healt_data.map(bannerNews => (
            <TouchableOpacity onPress={()=> navigation.navigate('Newsdetails')}>

                <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}} />
                      </TouchableOpacity>
         ))}
         </ScrollView>
         )}

        keyExtractor={(item) => item.u_id.toString()}
        data={news_covid_data}
        renderItem={renderNews}
      
          
       /*  keyExtractor={(item) => item.u_id.toString()}
          data={news_healt_data}
          renderItem={renderNews} 
        */
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
      height: Dimensions.get('window').height /5 ,
      width: Dimensions.get('window').width 
    },
  });
export   default Covid;