import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import * as navigation from '../../config/Router/rootNavigation';
import {ApiGetUser, ApiPostProduct, ApiRegister} from '../../config/Api';

const DetailProduct = () => {
  const isFocused = useIsFocused();
  const [harga, setharga] = useState('');
  const [nama, setnama] = useState('');
  const [deskripsi, setdeskripsi] = useState('');
  const [kategori, setkategori] = useState([]);
  const [response, setResponse] = useState({assets: [{uri: ''}]});
  const [image, setimage] = useState('');
  const [lokasi, setlokasi] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const token = useSelector(state => state.global.accessToken);
  const user = useSelector(state => state.global.user);
  const category = [
    'Elektronik',
    'Komputer dan Aksesoris',
    'Handphone dan Aksesoris',
    'Pakaian Pria',
    'Sepatu Pria',
    'Tas Pria',
    'Aksesoris Fashion',
    'Kesehatan',
  ];
  const dispatch = useDispatch();
  const data = {
    name: nama,
    description: deskripsi,
    base_price: harga,
    location: lokasi,
    image: image,
    category_ids: kategori.toString(),
  };
  const terbitkan = () => {
    if (
      harga == '' ||
      kategori == '' ||
      image == '' ||
      nama == '' ||
      deskripsi == '' ||
      lokasi == ''
    ) {
      Alert.alert('All fields are required');
      return false;
    }
    dispatch(ApiPostProduct(token, data));
  };
  
  const imagePicker = async () => {
    ImagePicker.openPicker({
      width: 450,
      height: 450,
      cropping: true,
    }).then(image => {
      console.log(image);
      const uploadUri =
      Platform.OS === 'IOS' ? image.path.replace('file://', '') : image.path;
      setimage(uploadUri);
    });
  };
  useEffect(() => {
    dispatch(ApiGetUser(token));
    user['address'] == undefined
      ? navigation.navigate('Akun')
      : console.log(user);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <Text>Preview Image</Text>
            <Image source={{uri: image}} style={{width: 300, height: 300}} />
          </View>
        </Modal>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icon/fi_arrow-left.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Lengkapi Detail Product</Text>
        <Text style={{color: 'black'}}>Nama Produk</Text>
        <TextInput
          placeholder="Nama Produk"
          style={styles.inputText}
          value={nama}
          onChangeText={val => setnama(val)}
        />

        <Text style={{color: 'black'}}>Harga Produk</Text>
        <TextInput
          placeholder="RP 0,00"
          style={styles.inputText}
          keyboardType="number-pad"
          value={harga}
          onChangeText={val => setharga(val)}
        />
        <Text style={{color: 'black'}}>Lokasi</Text>
        <TextInput
          placeholder="Bandung"
          style={styles.inputText}
          value={lokasi}
          onChangeText={val => setlokasi(val)}
        />

        <Text style={{color: 'black'}}>Kategori</Text>
        <View>
          <SelectDropdown
            data={category}
            defaultButtonText={'Masukkan Kategori'}
            buttonStyle={styles.dropdown}
            onSelect={(selectedItem, index) => {
              setkategori([index + 96]);
              console.log('kategori', kategori);
            }}
            buttonTextStyle={{
              color: '#8A8A8A',
              fontSize: 14,
              textAlign: 'left',
            }}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#8A8A8A'}
                  size={14}
                />
              );
            }}
          />
        </View>
        <Text style={{color: 'black'}}>Deskripsi</Text>
        <TextInput
          placeholder="Deskripsi produk"
          style={styles.inputText}
          value={deskripsi}
          multiline={true}
          onChangeText={val => setdeskripsi(val)}
        />
        <Text style={{color: 'black'}}>Foto Produk</Text>
        <Pressable onPress={() => imagePicker()}>
          <View style={styles.boxAdd}>
            <Icon size={20} name={'plus'} />
            <Text>Tambah Produk</Text>
          </View>
        </Pressable>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() =>
              image != ''
                ? setModalVisible(!modalVisible)
                : Alert.alert('image belum diisi')
            }>
            <Text style={styles.buttonText2}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => terbitkan()}>
            <Text style={styles.buttonText}>Terbitkan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginVertical: 40,
  },
  inputText: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#D0D0D0',
    position: 'relative',
    marginBottom: 20,
  },
  iconInput: {
    width: 24,
    height: 24,
  },
  eye: {position: 'absolute', right: 10, top: 25},
  button: {
    padding: 18,
    backgroundColor: '#7126B5',
    borderRadius: 14,
    alignItems: 'center',
    width: '45%',
  },
  button2: {
    padding: 18,
    backgroundColor: 'white',
    borderColor: '#7126B5',
    borderRadius: 14,
    alignItems: 'center',
    width: '45%',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonText2: {
    color: '#7126B5',
    fontSize: 16,
    fontWeight: '500',
  },
  navigateText: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footerText: {
    color: 'black',
    fontSize: 16,
  },
  textClick: {
    color: '#7126B5',
    fontSize: 16,
    fontWeight: '700',
  },
  boxAdd: {
    borderWidth: 1,
    borderRadius: 8,
    width: 156,
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    marginBottom: 20,
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#D0D0D0',
    marginBottom: 20,
    width: '100%',
  },
});
