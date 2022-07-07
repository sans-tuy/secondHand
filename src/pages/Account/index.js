import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';


const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akun Saya</Text>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <View style={styles.wrapperIcon}>
          <Image
            style={styles.icon}
            source={require('../../assets/Icon/fi_camera.png')}
          />
        </View>
      </View>
      <View style={styles.wrapperText}>
        <Image
        source={require('../../assets/Icon/fi_edit-3.png')}
        style={styles.icon}
        />
        <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
          <Text style={styles.text}>Ubah akun</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperText}>
        <Image
          source={require('../../assets/Icon/fi_settings.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Pengaturan Akun</Text>
      </View>
      <View style={styles.wrapperText}>
        <Image
          source={require('../../assets/Icon/fi_log-out.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Keluar</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperIcon: {
    width: 96,
    height: 96,
    backgroundColor: '#E2D4F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'popins',
    color: 'black',
    marginBottom: 16,
  },
  text: {
    marginLeft: 8,
    color: 'black',
    fontSize: 16,
  },
  wrapperText: {
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
});
