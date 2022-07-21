import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const MiniButton = ({onPressSearch, textButton, textStyle, style, iconClr}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={style} onPress={onPressSearch}>
        <Icon name={'search'} color={iconClr} size={25} />
        <Text style={textStyle}>{textButton}</Text>
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
});
