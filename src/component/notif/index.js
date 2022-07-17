import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Notif = props => {
  return (
    <TouchableOpacity style={styles.wrapperNotif} onPress={props.press}>
      <View style={styles.imageNotif}>
        <Image
          style={styles.image}
          source={require('../../assets/Images/jam1.png')}
        />
      </View>
      <View style={styles.mainNotif}>
        <Text style={styles.titleNotif}>{props.titleNotif}</Text>
        <Text style={styles.textNotif}>{props.textNotif}</Text>
      </View>
      <View style={styles.Date}>
        <Text style={styles.dateNotif} adjustsFontSizeToFit={true}>
          {props.dateNotif}
        </Text>
        <View style={styles.redNotif}></View>
      </View>
    </TouchableOpacity>
  );
};

export default Notif;

const styles = StyleSheet.create({
  wrapperNotif: {
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  imageNotif: {
    width: 48,
    height: 48,
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderRadius: 8,
  },
  mainNotif: {
    width: 210,
    paddingLeft: 14,
  },
  textNotif: {
    color: 'black',
    fontSize: 17,
    lineHeight: 25,
  },
  titleNotif: {
    marginBottom: 4,
  },
  redNotif: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'red',
    position: 'absolute',
    right: -15,
    top: 6,
  },
  Date: {
    flexDirection: 'row',
  },
  dateNotif: {
    position: 'relative',
  },
});
