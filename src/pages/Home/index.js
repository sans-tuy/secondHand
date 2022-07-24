import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ScrollView,
  LogBox,
} from 'react-native';

import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

import Category from '../../component/Category';
import SearchBar from '../../component/SearchBar';
import MiniButton from '../../component/MiniButton';
import {
  ApiGetHome,
  ApiListOrderById,
  ApiGetProductById,
  ApiGetBanner,
} from '../../config/Api';
import {setDataProduct} from '../../config/Redux/reducer';
import Carousel from '../../component/Carousel';

const icon = require('../../assets/icon/png_gift_88837.png');

const DATA = [
  {
    title: 'Semua',
  },
  {
    title: 'Elektronik',
  },
  {
    title: 'Komputer dan Aksesoris',
  },
  {
    title: 'Fotografi',
  },
  {
    title: 'Makanan dan Minuman',
  },
];

const dummy = [
  {
    id: '1',
    title: 'Laliga',
    image:
      'https://firebasestorage.googleapis.com/v0/b/market-final-project.appspot.com/o/banner%2FBAN-1656828994178-lega_calcio.png?alt=media',
  },
  {
    id: '2',
    title: 'Premier',
    image:
      'https://firebasestorage.googleapis.com/v0/b/market-final-project.appspot.com/o/banner%2FBAN-1656829026499-la_liga.jpg?alt=media',
  },
  {
    id: '3',
    title: 'Liga Indonesia',
    image:
      'https://firebasestorage.googleapis.com/v0/b/market-final-project.appspot.com/o/banner%2FBAN-1656829026499-la_liga.jpg?alt=media',
  },
];

function Home({navigation}) {
  // const [value, setValue] = useState('');
  const [search, setSearch] = useState('Semua');
  const [dataList, setDataList] = useState([]);
  const [typeSearch, setTypeSearch] = useState('');

  const token = useSelector(state => state.global.accessToken);
  const dataProduct = useSelector(state => state.global.dataProduct);
  const dataBanner = useSelector(state => state.global.dataBanner);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://market-final-project.herokuapp.com/buyer/product')
      .then(val => {
        const data = val.data;
        dispatch(setDataProduct(data));
        setDataList(data);
      })
      .catch(err => {
        console.log(err);
      });

    dispatch(ApiGetBanner());
    () => {
      setDataList(dataProduct);
    };
  }, []);

  // console.log(dataBanner);

  const setSearchFilter = search => {
    if (search !== 'Semua') {
      setDataList([
        ...dataProduct.filter(
          item => item.Categories.map(it => it.name)[0] === search,
        ),
      ]);
    } else {
      setDataList(dataProduct);
    }
    setSearch(search);
  };

  const searchTyping = text => {
    if (text) {
      const newData = dataList.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setDataList(newData);
      setTypeSearch(text);
    } else {
      setDataList(dataProduct);
      setSearch(text);
    }
  };

  // console.log(dataProduct);
  return (
    <LinearGradient
      colors={['#FFE9C9', '#ffffff']}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.containerCategory}>
        {/* {dataList === [] ? dataProduct : dataList} */}
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={dataList}
          onEndReachedThreshold={4}
          ListHeaderComponent={
            <>
              <SearchBar
                placeholder="Cari di Second Chance"
                value={typeSearch}
                onChangeText={text => {
                  setTypeSearch(text);
                }}
                onPressSearch={() => {
                  searchTyping(typeSearch);
                  setTypeSearch('');
                }}
              />
              <Carousel
                data={dataBanner}
                subtitle="Diskon Hingga"
                discount="60%"
              />

              <View style={{marginHorizontal: 15}}>
                <Text style={styles.textCategory}>Telusuri Kategori</Text>
              </View>
              <View style={styles.containerButton}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {DATA.map((item, index) => (
                    <MiniButton
                      e={item.title}
                      key={index}
                      iconClr={search === item.title ? '#fff' : '#3C3C3C'}
                      textButton={item.title}
                      textStyle={[
                        styles.textButtonInActive,
                        search === item.title && styles.textButtonActive,
                      ]}
                      style={[
                        styles.buttonContainerInactive,
                        search === item.title && styles.buttonContainer,
                      ]}
                      onPressSearch={() => setSearchFilter(item.title)}
                    />
                  ))}
                </ScrollView>
              </View>
            </>
          }
          renderItem={({item, index}) => (
            <Category
              key={index}
              onPress={() => {
                navigation.navigate('PreviewProduct', {
                  data: item,
                });
              }}
              title={item.name}
              image={item.image_url}
              category={item.Categories.map(it => it.name)}
              price={item.base_price}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {},
  containerCategory: {
    marginTop: 20,
  },
  containerButton: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  button: {
    // backgroundColor: '#7126B5',
    padding: 15,
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
  textCategory: {
    color: '#151515',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});

{
  /* <FlatList
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
              /> */
}

{
  /* {dataProduct &&
                dataProduct.map((item, index) => (
                  <View key={index} style={{width: '50%'}}>
                    <Category
                      onPress={() => {
                        navigation.navigate('PreviewProduct', {
                          itemId: item.id,
                        });
                      }}
                      title={item.name}
                      image={item.image_url}
                      category={item.Categories.map(it => it.name)}
                      price={item.base_price}
                    />
                  </View>
                ))} */
}

{
  /* <View style={{marginHorizontal: 15, marginTop: 15}}>
                <Banner
                  source={icon}
                  title="Bulan Ramadhan Banyak Diskon!"
                  subtitle="Diskon Hingga"
                  discount="60%"
                />
              </View> */
}
