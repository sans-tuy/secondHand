import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const MiniButton = ({onPressSearch, textButton, onClickButton}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainerInactive}
        onPress={onPressSearch}>
        <Icon name={'search'} color="#3C3C3C" size={25} />
        <Text style={styles.textButtonInActive}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MiniButton;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginRight: 16,
  },
  buttonContainer: {
    paddingHorizontal: 18,
    paddingVertical: 5,
    flexDirection: 'row',
    height: 44,
    backgroundColor: '#7126B5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerInactive: {
    paddingHorizontal: 18,
    paddingVertical: 5,
    flexDirection: 'row',
    height: 44,
    backgroundColor: '#E2D4F0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonActive: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
  },
  textButtonInActive: {
    color: '#3C3C3C',
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
  },
});
