import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Banner = ({title, subtitle, discount, source}) => {
  return (
    <View style={styles.bannerContainer}>
      <View style={{paddingLeft: 20, width: '70%'}}>
        <Text style={styles.titleBanner}>{title}</Text>
        <Text style={styles.subTitleBanner}>{subtitle}</Text>
        <Text style={styles.discountPercent}>{discount}</Text>
      </View>
      <View style={{paddingRight: 20}}>
        <Image source={source} />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 1,
  },
  titleBanner: {
    color: '#151515',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 25,
  },
  subTitleBanner: {
    color: '#151515',
    marginTop: 16,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  discountPercent: {
    color: '#FA2C5A',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 20,
    marginTop: 4,
  },
});
