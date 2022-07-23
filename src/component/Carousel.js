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

const Carousel = ({data, subtitle, discount}) => {
  const [imgActive, setImgActive] = useState(0);
  const onChange = nativeEvent => {
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
        {data.map(data => (
          <View style={styles.bannerContainer} key={data.id}>
            <View>
              <Text style={styles.titleBanner}>{data.name}</Text>
              <Text style={styles.subTitleBanner}>{subtitle}</Text>
              <Text style={styles.discountPercent}>{discount}</Text>
            </View>
            <View>
              <Image
                resizeMode="stretch"
                style={{
                  borderRadius: 8,
                  width: width * 0.3,
                  height: height * 0.12,
                }}
                source={{uri: data.image_url}}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.wrapDot}>
        {data.map((data, index) => (
          <Icon
            key={data.id}
            name={imgActive == index ? 'dot-fill' : 'dot'}
            size={15}
            color="#000"
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
  bannerContainer: {
    width: width,
    height: height * 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
