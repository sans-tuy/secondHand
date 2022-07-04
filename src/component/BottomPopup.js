import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import React from 'react';
import {Portal} from 'react-native-paper';

const BottomPopup = () => {
  return (
    <Portal>
      <Text>BottomPopup</Text>
    </Portal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({});
