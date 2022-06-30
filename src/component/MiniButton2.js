import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

const MiniButton2 = ({onPressSearch, textButton, iconName}) => {
  const selectedChip = useSelector(state => state.global.selectedChip);
  const [bgColor, setbgColor] = useState('#E2D4F0');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainerInactive, {backgroundColor: bgColor}]}
        onPress={onPressSearch}>
        <Icon name={iconName} color="#3C3C3C" size={25} />
        <Text style={styles.textButtonInActive}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MiniButton2;

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
