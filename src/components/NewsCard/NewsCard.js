import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,


} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news , onPress }) => {
    
    return(
        <TouchableOpacity style={styles.container}onPress={onPress} >
            <Image style = {styles.image}  source={{url:news.imageUrl}}/>
            <View style ={styles.inner_container}></View>
           <Text style={styles.title}>{news.title}</Text>
           <Text style={styles.description}>{news.description}</Text>
           <Text style={styles.author}>{news.author}</Text>
            </TouchableOpacity>

    );
};

export default NewsCard;