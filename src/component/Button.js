import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../utils/colors';

const SIZES = ['small', 'medium', 'large'];
const TYPES = [
  'primary',
  'secondary',
  'accent',
  'error',
  'warning',
  'info',
  'success',
];
const ROUNDED = ['small', 'medium', 'large'];

export default function MyButton({
  disabled,
  children,
  onPress,
  type,
  size,
  label,
  rounded,
}) {
  const btnSize = SIZES.includes(size) ? size : 'small';
  const btnType = TYPES.includes(type) ? type : 'primary';
  const btnRound = ROUNDED.includes(rounded) ? rounded : 'small';

  const btnStyle = {
    height: 50,
    width: btnSize === 'large' ? '80%' : btnSize === 'medium' ? 210 : 'auto',
    borderRadius: btnRound === 'small' ? 5 : btnRound === 'medium' ? 10 : 20,
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      btnType === 'primary'
        ? Colors.primary
        : btnType === 'secondary'
        ? Colors.secondary
        : btnType === 'accent'
        ? Colors.accent
        : btnType === 'error'
        ? Colors.error
        : btnType === 'warning'
        ? Colors.warning
        : btnType === 'info'
        ? Colors.info
        : Colors.success,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  };

  return (
    <TouchableOpacity style={btnStyle} disabled={disabled} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
