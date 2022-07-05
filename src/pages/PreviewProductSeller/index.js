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

const PreviewProductSeller = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Carousel images={dummy} />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => {
            navigation.navigate('Daftar Jual');
          }}
          rounded={'large'}
          type={'primary'}
          size={'large'}
          label={'Terbitkan'}
        />
      </View>
      {/* content
         section  */}
    </View>
  );
};

export default PreviewProductSeller;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    position: 'relative',
    top: -height * 0.15,
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
