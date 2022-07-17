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
import {useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as navigation from '../../config/Router/rootNavigation';
import {ApiRegister} from '../../config/Api';

const Register = () => {
  const [eye, seteye] = useState('eye-off-outline');
  const [hide, sethide] = useState(true);
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [nama, setnama] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [password, setpassword] = useState('');
  const [response, setResponse] = useState([]);
  const [image, setimage] = useState();
  const dispatch = useDispatch();
  const data = {
    email: email,
    password: password,
    name: nama,
  };
  const validate = () => {
    if (email == '' || password == '' || nama == '') {
      Alert.alert('All fields are required');
      return false;
    }
    dispatch(ApiRegister(data));
  };
  const chooseImage = React.useCallback(options => {
    launchImageLibrary(options, setResponse);
  }, []);
  return (
    <View style={styles.container}>
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
            secureTextEntry={hide}
            onChangeText={val => setpassword(val)}
          />
          <Pressable
            style={styles.eye}
            onPressIn={() => {
              seteye('eye-outline');
              sethide(false);
            }}
            onPressOut={() => {
              seteye('eye-off-outline');
              sethide(true);
            }}>
            <Ionic name={eye} size={25} color={'#7126B5'} />
          </Pressable>
        </View>
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
