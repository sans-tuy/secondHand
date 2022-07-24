import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../../utils/colors';

import Button from '../../component/Button';
import BottomPopup from '../../component/BottomPopup';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

import {ApiOrder, ApiListOrderById, ApiListOrder} from '../../config/Api';
import {useDispatch, useSelector} from 'react-redux';
import {setDataProductById} from '../../config/Redux/reducer';
import axios from 'axios';

// const dummy = [
//   {
//     id: '1',
//     image: require('../../assets/Images/detailjam.png'),
//   },
//   {
//     id: '2',
//     image: require('../../assets/Images/detailjam.png'),
//   },
//   {
//     id: '3',
//     image: require('../../assets/Images/detailjam.png'),
//   },
// ];

const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const Spinner = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const PreviewProduct = ({route, navigation}) => {
  const {data} = route.params;
  const token = useSelector(state => state.global.accessToken);
  const dataOrderById = useSelector(state => state.global.dataProductOrderById);
  const dataProdutId = useSelector(state => state.global.dataProductById);
  const dataOrderResponse = useSelector(state => state.global.dataOrder);
  const dataListOrder = useSelector(state => state.global.dataListProductOrder);

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bid, setBid] = useState(false);
  const [sendBid, setSendBid] = useState(false);
  const [bidPrice, setBidPrice] = useState('');
  const [sold, setSold] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const id = data.id;

  const dataBid = {
    product_id: data.id,
    bid_price: bidPrice,
  };

  const handleBidPrice = () => {
    if (bidPrice === '') {
      Alert.alert('All fields are required');
      return false;
    }
    dispatch(ApiOrder(token, dataBid));
    setBid(true);
  };

  useEffect(() => {
    axios
      .get(`https://market-final-project.herokuapp.com/buyer/product/${id}`, {
        headers: {access_token: `${token}`},
      })
      .then(val => {
        const data = val.data;
        dispatch(setDataProductById(data));
        setLoading(false);
      })
      .catch(err => console.log(err));

    dispatch(ApiListOrder(token));
  }, []);

  useEffect(() => {
    if (bidPrice === '') {
      setSendBid(true);
    }
    if (data.status !== 'available') {
      setBid(true);
    }
    if (data.status === 'sold') {
      setSold(true);
    }
  });

  // console.log(dataProdutId);
  console.log(dataListOrder);
  // console.log(dataOrderResponse);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Spinner />
      ) : (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                position: 'absolute',
                top: height * 0.05,
                zIndex: 100,
                marginLeft: 10,
              }}>
              <Icon2 name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>

            <Image
              resizeMode="stretch"
              style={styles.wrap}
              key={data.id}
              source={{uri: data.image_url}}
            />
            {/* modal 
        popup section */}
            <View>
              <ModalPopup visible={visible}>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '500',
                      marginRight: 15,
                    }}>
                    Harga tawarmu berhasil dikirim ke penjual
                  </Text>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon name="close" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </ModalPopup>
            </View>
            {/* //modal 
        popup section */}
            {/* content
         section */}
            <View style={styles.cardDesc}>
              <Text style={styles.textTitle}>{dataProdutId.name}</Text>
              <Text style={styles.type}>
                {data.Categories.map(it => it.name)[0]}
              </Text>
              <Text style={styles.price}>
                {' '}
                Rp
                {data.base_price
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
              </Text>
            </View>
            <View style={styles.cardProf}>
              <View style={{marginRight: 16}}>
                <Image
                  style={{width: 35, height: 35}}
                  source={{
                    uri: data.image_url,
                  }}
                />
              </View>
              <View>
                <Text style={styles.nama}>{dataProdutId.User.full_name}</Text>
                <Text style={styles.kota}>{dataProdutId.User.city}</Text>
              </View>
            </View>
            <View style={styles.fullDesc}>
              <View>
                <Text style={styles.fullTextDesc}>
                  {dataProdutId.description}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <Button
              disabled={bid ? true : false}
              onPress={() => setShow(true)}
              rounded={'large'}
              type={bid ? 'secondary' : 'primary'}
              size={'large'}
              label={sold ? 'Terjual' : 'Saya Tertarik dan ingin nego'}
            />
          </View>
          {/* content
       section  */}
          {/* modal
       bottom popup 
       section */}
          <BottomPopup
            ennableBackdropDismiss
            onDismiss={() => {
              setShow(false);
            }}
            show={show}>
            <ScrollView>
              <View
                style={{
                  padding: 32,
                  justifyContent: 'center',
                  marginBottom: 100,
                }}>
                <Text
                  style={{
                    marginBottom: 16,
                    color: Colors.text,
                    fontSize: 14,
                    fontWeight: '500',
                    fontStyle: 'normal',
                  }}>
                  Masukan Harga Tawaran mu
                </Text>

                <Text
                  style={{
                    color: Colors.textSecond,
                    fontSize: 14,
                    fontWeight: '500',
                    fontStyle: 'normal',
                  }}>
                  Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
                  akan segera dihubungi penjual.
                </Text>

                <View style={styles.cardProd}>
                  <View style={{marginRight: 16}}>
                    <Image
                      style={{width: 35, height: 35}}
                      source={{uri: dataProdutId.image_url}}
                    />
                  </View>
                  <View>
                    <Text style={styles.nama}>{dataProdutId.name}</Text>
                    <Text style={styles.price}>
                      {' '}
                      Rp
                      {data.base_price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                    </Text>
                  </View>
                </View>

                <View style={{paddingTop: 16}}>
                  <Text style={styles.price}>Harga Tawar</Text>
                  <View>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={val => {
                        setBidPrice(val);
                        setSendBid(false);
                      }}
                      value={bidPrice}
                      placeholder="Rp.0,00"
                      style={styles.inputText}
                    />
                  </View>
                </View>

                <Button
                  disabled={sendBid ? true : false}
                  onPress={() => {
                    handleBidPrice();
                    setVisible(true);
                    setShow(false);
                    setBidPrice('');
                  }}
                  rounded={'large'}
                  type={sendBid ? 'secondary' : 'primary'}
                  label={'Kirim'}
                />
              </View>
            </ScrollView>
          </BottomPopup>
          {/* modal
       bottom popup section */}
        </View>
      )}
    </View>
  );
};

export default React.memo(PreviewProduct);

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrap: {
    width: width,
    height: height * 0.5,
    // top: -height * 0.05,
  },
  modalBackground: {
    flex: 1,

    marginTop: 100,
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#73CA5C',
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 20,
  },
  cardDesc: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    bottom: 0,
    marginTop: -height * 0.07,
    marginBottom: 16,
  },
  textTitle: {
    color: Colors.text,
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
    marginBottom: 4,
  },
  type: {
    color: Colors.textSecond,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    marginBottom: 4,
  },
  price: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  cardProf: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  nama: {
    color: Colors.text,
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
  },
  kota: {
    color: Colors.textSecond,
    fontWeight: '400',
    fontSize: 10,
    fontStyle: 'normal',
  },
  fullDesc: {
    marginBottom: 80,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  fullTextDesc: {
    fontWeight: 20,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.textSecond,
  },
  buttonWrapper: {
    zIndex: 10,
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  cardProd: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
});
