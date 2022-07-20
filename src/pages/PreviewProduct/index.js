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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../utils/colors';

import Carousel from '../../component/Carousel';
import Button from '../../component/Button';
import BottomPopup from '../../component/BottomPopup';
import Icon from 'react-native-vector-icons/AntDesign';

const dummy = [
  {
    id: '1',
    image: require('../../assets/Images/detailjam.png'),
  },
  {
    id: '2',
    image: require('../../assets/Images/detailjam.png'),
  },
  {
    id: '3',
    image: require('../../assets/Images/detailjam.png'),
  },
];

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

const PreviewProduct = ({route, navigation}) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bid, setBid] = useState(false);

  const {data} = route.params;
  console.log(data);

  return (
    <View style={{flex: 1, marginBottom: 30, height: '100%'}}>
      <ScrollView style={{flex: 1}}>
        <Carousel images={dummy} />
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
          <Text style={styles.textTitle}>Jam Tangan Casio</Text>
          <Text style={styles.type}>Aksesoris</Text>
          <Text style={styles.price}>
            {' '}
            Rp{(250000).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
          </Text>
        </View>
        <View style={styles.cardProf}>
          <View style={{marginRight: 16}}>
            <Image source={require('../../assets/Images/profilePrev.png')} />
          </View>
          <View>
            <Text style={styles.nama}>Nama Penjual</Text>
            <Text style={styles.kota}>Kota</Text>
          </View>
        </View>
        <View style={styles.fullDesc}>
          <View>
            <Text style={styles.fullTextDesc}>
              My issue? Every post that I've read on stack and medium always
              only looks into the Searchbar Search filter example. Which is
              basically only accepting 1 filter string and then filtering the
              list. But what if I have multiple parameters to filter like in the
              example I'm trying to achieve? what if you have 3 parameters, and
              each parameter can have multiple values (4 or more) to be
              considered in filtering. How to apply such a complex level of
              filtering, and then return the filtered items to my Flatlist? My
              issue? Every post that I've read on stack and medium always only
              looks into the Searchbar Search filter example. Which is basically
              only accepting 1 filter string and then filtering the list. But
              what if I have multiple parameters to filter like in the example
              I'm trying to achieve? what if you have 3 parameters, and each
              parameter can have multiple values (4 or more) to be considered in
              filtering. How to apply such a complex level of filtering, and
              then return the filtered items to my Flatlist?
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            disabled={bid ? true : false}
            onPress={() => setShow(true)}
            rounded={'large'}
            type={bid ? 'secondary' : 'primary'}
            size={'large'}
            label={'Saya Tertarik dan ingin nego'}
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
                    source={require('../../assets/Images/profilePrev.png')}
                  />
                </View>
                <View>
                  <Text style={styles.nama}>Jam Tangan Casio</Text>
                  <Text style={styles.price}>
                    {' '}
                    Rp
                    {(250000)
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                  </Text>
                </View>
              </View>

              <View style={{paddingTop: 16}}>
                <Text style={styles.price}>Harga Tawar</Text>
                <View>
                  <TextInput placeholder="Rp.0,00" style={styles.inputText} />
                </View>
              </View>

              <Button
                onPress={() => {
                  setVisible(true);
                  setShow(false);
                  setBid(true);
                }}
                rounded={'large'}
                type={'primary'}
                label={'Kirim'}
              />
            </View>
          </ScrollView>
        </BottomPopup>
        {/* modal
       bottom popup section */}
      </ScrollView>
    </View>
  );
};

export default PreviewProduct;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    position: 'absolute',
    // top: -height * 0.15,
    left: 0,
    right: 0,
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
