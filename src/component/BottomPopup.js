import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomPopup = ({
  show,
  onDismiss,
  children,
  ennableBackdropDismiss,
  onPress,
}) => {
  const bottomSheetHeigt = Dimensions.get('window').height * 0.6;
  const deviceWidth = Dimensions.get('window').width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeigt)).current;

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: -bottomSheetHeigt,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <>
      <Pressable
        onPress={ennableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />

      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeigt,
            bottom: bottom,
            shadowOffset: {height: -3},
          },
          styles.common,
        ]}>
        <View
          style={[styles.header, styles.common, {shadowOffset: {height: 3}}]}>
          <View
            style={{
              width: 60,
              height: 3,
              borderRadius: 1.5,
              position: 'absolute',
              top: 8,
              left: (deviceWidth - 60) / 2,
              zIndex: 10,
              backgroundColor: '#ccc',
            }}
          />

          <TouchableOpacity onPress={onDismiss}>
            <Icon style={styles.closeIcon} name="close" size={20} color="red" />
          </TouchableOpacity>
        </View>
        {children}
      </Animated.View>
    </>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
  },
  header: {
    height: 44,
    backgroundColor: '#fff',
  },
  common: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
