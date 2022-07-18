import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import * as navigation from '../../config/Router/rootNavigation';

import LinearGradient from 'react-native-linear-gradient';

import Banner from '../../component/Banner';
import Category from '../../component/Category';
import SearchBar from '../../component/SearchBar';
import MiniButton from '../../component/MiniButton';
import {ApiGetHome} from '../../config/Api';

const icon = require('../../assets/icon/png_gift_88837.png');

function Home() {
  const dataProduct = useSelector(state => state.global.dataProduct);

  const DATA = [
    {
      id: 'id1',
      title: 'Semua',
    },
    {
      id: 'id2',
      title: 'Hobby',
    },
    {
      id: 'id3',
      title: 'Kendaraan',
    },
    {
      id: 'id4',
      title: 'Baju',
    },
    {
      id: 'id5',
      title: 'Sapi',
    },
  ];

  // const dummy = [
  //   {
  //     id: '1',
  //     image: require('../../assets/Images/jam1.png'),
  //     title: 'Jam Tangan Casio',
  //     category: 'Aksesoris',
  //     price: '290000',
  //   },
  //   {
  //     id: '2',
  //     image: require('../../assets/Images/jam2.png'),
  //     title: 'Jam Tangan Samsung',
  //     category: 'Aksesoris',
  //     price: '3000000',
  //   },
  //   {
  //     id: '3',
  //     image: require('../../assets/Images/jam1.png'),
  //     title: 'Jam Tangan Casio',
  //     category: 'Aksesoris',
  //     price: '290000',
  //   },
  //   {
  //     id: '4',
  //     image: require('../../assets/Images/jam2.png'),
  //     title: 'Jam Tangan Samsung',
  //     category: 'Aksesoris',
  //     price: '3000000',
  //   },
  // ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ApiGetHome());
  }, []);

  const [value, setValue] = useState('');
  const [click, setClick] = useState(false);

  const handleOnPressButtonSearch = () => {
    alert('Ini Button');
  };

  const handleOnPressCategoryn = () => {
    navigation.navigate('PreviewProduct');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE9C9', '#ffffff']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}>
        <ScrollView>
          <SearchBar
            placeholder="Cari di Second Chance"
            value={value}
            onChangeText={text => setValue(text)}
            onPressSearch={() => {
              console.log(value);
              setValue('');
            }}
            onPressDelete={() => {
              console.log('Hello Delete Button Search');
              setValue('');
            }}
          />
          <Banner
            source={icon}
            title="Bulan Ramadhan Banyak Diskon!"
            subtitle="Diskon Hingga"
            discount="60%"
          />
          <View style={styles.containerCategory}>
            <View>
              <Text style={styles.textCategory}>Telusuri Kategori</Text>
            </View>
            <View style={styles.containerButton}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                data={DATA}
                onEndReachedThreshold={4}
                renderItem={({item}) => (
                  <MiniButton
                    textButton={item.title}
                    style={styles.button}
                    onPressSearch={handleOnPressButtonSearch}
                  />
                )}
              />
            </View>
            <View style={styles.containerCard}>
              {dataProduct &&
                dataProduct.map((item, index) => (
                  <View key={index} style={{width: '50%'}}>
                    <Category
                      onPress={handleOnPressCategoryn}
                      title={item.name}
                      image={item.image_url}
                      category={item.Categories.map(it => it.name)}
                      price={item.base_price}
                    />
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {},
  containerCategory: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  containerButton: {
    flexDirection: 'row',
  },
  button: {
    padding: 15,
  },
  textCategory: {
    color: '#151515',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  containerCard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
