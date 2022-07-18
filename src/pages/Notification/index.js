import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Notif from '../../component/notif';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApiGetNotif} from '../../config/Api';

const Notification = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.global.accessToken);
  const notif = useSelector(state => state.global.notif);
  useEffect(() => {
    dispatch(ApiGetNotif(token));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akun Saya</Text>
      {console.log('token', token)}
      <View style={styles.containerNotif}>
        {notif.map((data, index) => (
          <View key={index}>
            <Notif
              image={'../../assets/Images/jam1.png'}
              titleNotif={'Penawaran produk'}
              textNotif="Jam Tangan Casio Rp 250.000 Ditawar Rp 200.000"
              dateNotif="20 Apr, 14:04"
            />
          </View>
        ))}

        {/* <Notif
          image={'../../assets/Images/jam1.png'}
          titleNotif={'Penawaran produk'}
          textNotif="Jam Tangan Casio Rp 250.000 Ditawar Rp 200.000"
          dateNotif="20 Apr, 14:04"
        />
        <Notif
          image={'../../assets/Images/jam1.png'}
          titleNotif="Berhasil diterbitkan"
          textNotif="Jam Tangan Casio Rp 250.000"
          dateNotif="19 Apr, 12:00"
        /> */}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'popins',
    color: 'black',
    marginBottom: 16,
  },
});
