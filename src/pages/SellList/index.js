import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MiniButton from '../../component/MiniButton2';
import Icon from 'react-native-vector-icons/AntDesign';
import Notif from '../../component/notif';
import { setSelectedChip } from '../../config/Redux/reducer';
import { useEffect } from 'react';
import { ApiGetProduct, ApiGetWishlist, ApiprofileData } from '../../config/Api';
import * as navigation from '../../config/Router/rootNavigation';

function Produk(props) {
  const item = props.produk;
  return (
    <ScrollView>
      <View style={styles.listProduct}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}>
          <View style={styles.boxAdd}>
            <Icon size={20} name={'plus'} />
            <Text>Tambah Produk</Text>
          </View>
        </TouchableOpacity>
        {item.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('PreviewProductSeller')}>
              <View style={styles.boxProduct}>
                <Image
                  source={{ uri: `${data.image_url}` }}
                  style={styles.imageProduct}
                />
                <Text style={styles.titleProduct}>{data.name}</Text>
                <Text>{data.description}</Text>
                <Text style={styles.price}>Rp {data.base_price}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

function Favorite(props) {
  // const favorite = [
  //   {
  //     name: 'Penawaran Produk',
  //     description: 'Jam Tangan Casio Rp 250.000',
  //     updated_at: '19 Apr, 12:00',
  //   },
  // ];
  const favorite = props.fav;
  return (
    <View style={{ flex: 1 }}>
      {favorite.length == 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/Images/diminati.png')} />
        </View>
      ) : (
        favorite.map((data, index) => (
          <Notif
            image={{ uri: data.image_url }}
            titleNotif={data.name}
            textNotif={data.description}
            dateNotif={data.updated_at}
            press={() => navigation.navigate('PreviewProduct')}
          />
        ))
      )}
    </View>
  );
}

function Terjual() {
  return (
    <View>
      <Text>There is no screen terjual in figma XD</Text>
    </View>
  );
}

const SellList = () => {
  const selectedChip = useSelector(state => state.global.selectedChip);
  const token = useSelector(state => state.global.accessToken);
  const produk = useSelector(state => state.global.product);
  const favorite = useSelector(state => state.global.favorite);
  const dataAkun = useSelector(state => state.global.dataAkun);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ApiGetWishlist(token));
    dispatch(ApiGetProduct(token));
    dispatch(ApiprofileData(token));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Jual Saya</Text>
      <View style={styles.tile}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={styles.profile}
          />
          <View>
            <Text>{dataAkun.full_name}</Text>
            <Text>{dataAkun.city}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
          <View style={styles.buttonEdit}>
            <Text style={{ fontWeight: '900' }}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <ScrollView horizontal>
          <MiniButton
            textButton={'Produk'}
            iconName={'view-in-ar'}
            onPressSearch={() => dispatch(setSelectedChip(1))}
          />
          <MiniButton
            textButton={'Favorite'}
            iconName={'favorite-border'}
            onPressSearch={() => dispatch(setSelectedChip(2))}
          />
          <MiniButton
            textButton={'Terjual'}
            iconName={'attach-money'}
            onPressSearch={() => dispatch(setSelectedChip(3))}
          />
        </ScrollView>
      </View>
      {selectedChip == 1 ? (
        <Produk produk={produk} />
      ) : selectedChip == 2 ? (
        <Favorite fav={favorite} />
      ) : (
        <Terjual />
      )}
    </View>
  );
};

export default SellList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 20,
  },
  tile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E2D4F0',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  buttonEdit: {
    borderWidth: 2,
    borderColor: '#7126B5',
    width: 47,
    height: 26,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  boxAdd: {
    borderWidth: 1,
    borderRadius: 8,
    width: 156,
    height: 206,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  boxProduct: {
    borderWidth: 1,
    borderRadius: 8,
    width: 156,
    height: 206,
    borderColor: '#E2D4F0',
    padding: 8,
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  listProduct: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleProduct: {
    color: 'black',
    fontSize: 16,
  },
  price: {
    color: 'black',
    fontSize: 16,
  },
  imageProduct: {
    width: 140,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
