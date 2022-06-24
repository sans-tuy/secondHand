import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const Category = ({image, title, category, price}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardStyle}>
        <View style={styles.containerImage}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={{marginTop: 8}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={{marginTop: 4}}>
          <Text style={styles.price}>
            Rp{price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
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
