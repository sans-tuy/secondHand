import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

const Category = ({onPress, image, title, category, price}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.cardStyle}>
          <View style={styles.containerImage}>
            <ImageBackground
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU',
              }}
              resizeMode="cover"
              style={{flex: 1, justifyContent: 'center'}}>
              <Image source={{uri: image}} style={styles.image} />
            </ImageBackground>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={styles.title}>{title == false ? '' : title}</Text>
            <Text style={styles.category}>{category[0]}</Text>
          </View>
          <View style={{marginTop: 4}}>
            <Text style={styles.price}>
              Rp
              {price
                ? price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
                : ''}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerCard: {
    marginRight: 15,
    marginLeft: 15,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  container: {
    marginTop: 25,
    marginRight: 8,
  },
  cardStyle: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  containerImage: {
    borderRadius: 8,
    backgroundColor: 'red',
    width: windowWidth * 0.4,
    height: windowHeight * 0.14,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  title: {
    color: '#151515',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  category: {
    marginTop: 4,
    color: '#8A8A8A',
    fontWeight: '400',
    fontSize: 10,
  },
  price: {
    color: '#151515',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
  },
});
