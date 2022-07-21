import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Octicons';

const Carousel = ({images}) => {
  const [imgActive, setImgActive] = useState(0);

  onChange = nativeEvent => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != imgActive) {
      setImgActive(slide);
    }
  };

  return (
    <View style={styles.wrap}>
      <ScrollView
        onScroll={({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}>
        {images.map(data => (
          <Image
            resizeMode="stretch"
            style={styles.wrap}
            key={data.id}
            source={data.image}
          />
        ))}
      </ScrollView>

      <View style={styles.wrapDot}>
        {images.map((data, index) => (
          <Icon
            key={data.id}
            name={imgActive == index ? 'dot-fill' : 'dot'}
            size={15}
            color="#fff"
            style={{paddingRight: 5}}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrap: {
    width: width,
    height: height * 0.4,
  },
  wrapDot: {
    position: 'relative',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    top: -height * 0.07,
  },
});
