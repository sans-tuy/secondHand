import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MiniButton from '../../component/MiniButton2';
import Icon from 'react-native-vector-icons/AntDesign';
import Notif from '../../component/notif';
import {setSelectedChip} from '../../config/Redux/reducer';

function Produk() {
  return (
    <View style={styles.listProduct}>
      <TouchableOpacity>
        <View style={styles.boxAdd}>
          <Icon size={20} name={'plus'} />
          <Text>Tambah Produk</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.boxProduct}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.imageProduct}
          />
          <Text style={styles.titleProduct}>Jam Tangan Casio</Text>
          <Text>Aksesoris</Text>
          <Text style={styles.price}>Rp 250.000</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Favorite() {
  const notif = [
    {
      titleNotif: 'Penawaran Produk',
      textNotif: 'Jam Tangan Casio Rp 250.000',
      dateNotif: '19 Apr, 12:00',
    },
  ];
  return (
    <View style={{flex: 1}}>
      {notif.length == 0 ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/Images/diminati.png')} />
        </View>
      ) : (
        notif.map((data, index) => (
          <Notif
            image={'../../assets/Images/jam1.png'}
            titleNotif={data.titleNotif}
            textNotif={data.textNotif}
            dateNotif={data.dateNotif}
          />
        ))
      )}
    </View>
  );
}

function Terjual() {
  return (
    <View>
      <Text>Terjual</Text>
    </View>
  );
}

const SellList = () => {
  const selectedChip = useSelector(state => state.global.selectedChip);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Jual Saya</Text>
      <View style={styles.tile}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.profile}
          />
          <View>
            <Text>Nama Penjual</Text>
            <Text>Kota</Text>
          </View>
        </View>
        <View style={styles.buttonEdit}>
          <Text style={{fontWeight: '900'}}>Edit</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
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
        <Produk />
      ) : selectedChip == 2 ? (
        <Favorite />
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
