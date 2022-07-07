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
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as navigation from '../../config/Router/rootNavigation';
import {Button} from '@react-native-material/core';

const Register = () => {
  const [eye, seteye] = useState('eye-outline');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [nama, setnama] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [password, setpassword] = useState('');
  const [response, setResponse] = useState([]);
  const [image, setimage] = useState();
  const data = {
    email: email,
    password: password,
    image: image,
    phone: phone,
    city: city,
    name: nama,
    address: address,
  };
  const validate = () => {
    if (
      email == '' ||
      password == '' ||
      image == '' ||
      nama == '' ||
      address == '' ||
      city == '' ||
      phone == ''
    ) {
      Alert.alert('All fields are required');
      return false;
    }
    axios
      .post('https://market-final-project.herokuapp.com/auth/register', data)
      .then(val => {
        console.log(val.data);
        navigation.navigate('Login');
      })
      .catch(err => console.log(err));
  };
  const chooseImage = React.useCallback(options => {
    launchImageLibrary(options, setResponse);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icon/fi_arrow-left.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Daftar</Text>
          <Text style={{color: 'black'}}>Nama</Text>
          <TextInput
            placeholder="Nama Lengkap"
            style={styles.inputText}
            value={nama}
            onChangeText={val => setnama(val)}
          />

          <Text style={{color: 'black'}}>Email</Text>
          <TextInput
            placeholder="Contoh:johndee@gmail.com"
            style={styles.inputText}
            value={email}
            onChangeText={val => setemail(val)}
          />

          <Text style={{color: 'black'}}>Buat Password</Text>
          <View>
            <TextInput
              placeholder="Buat password"
              style={styles.inputText}
              value={password}
              onChangeText={val => setpassword(val)}
            />
            <Pressable
              style={styles.eye}
              onPressIn={() => seteye('eye-off-outline')}
              onPressOut={() => seteye('eye-outline')}>
              <Ionic name={eye} size={25} color={'#7126B5'} />
            </Pressable>
          </View>
          <Text style={{color: 'black'}}>Address</Text>
          <TextInput
            placeholder="Jl. Gundih 1 no.25/b"
            style={styles.inputText}
            value={address}
            onChangeText={val => setaddress(val)}
          />
          <Text style={{color: 'black'}}>Phone number</Text>
          <TextInput
            placeholder="Contoh:087863824653"
            style={styles.inputText}
            value={phone}
            onChangeText={val => setphone(val)}
          />
          <Text style={{color: 'black'}}>City</Text>
          <TextInput
            placeholder="Contoh:Surabaya"
            style={styles.inputText}
            value={city}
            onChangeText={val => setcity(val)}
          />

          <Text style={{color: 'black'}}>Image</Text>
          <Pressable
            onPress={() => {
              chooseImage('library', {
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
              });
            }}>
            <Text>Choose image</Text>
          </Pressable>
          <Pressable onPress={() => setimage(response['assets'][0]['uri'])}>
            <Text>Submit image</Text>
          </Pressable>

          <TouchableOpacity style={styles.button} onPress={() => validate()}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navigateText}>
          <Text style={styles.footerText}>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textClick}> Masuk di sini</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
  },
  buttonText: {
    color: 'white',
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
});
