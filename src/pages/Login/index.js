import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import * as navigation from '../../config/Router/rootNavigation';
import {useDispatch} from 'react-redux';
import {ApiLogin} from '../../config/Api';
const arrow = require('../../assets/icon/fi_arrow-left.png');

const Login = () => {
  const [eye, seteye] = useState('eye-off-outline');
  const [email, setemail] = useState('');
  const [hide, sethide] = useState(true);
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const data = {
    email: email,
    password: password,
  };
  const validate = () => {
    if (email == '' || password == '') {
      Alert.alert('All fields are required');
      return false;
    }
    dispatch(ApiLogin(data));
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image source={arrow} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Masuk</Text>
        <Text style={{color: 'black'}}>Email</Text>
        <TextInput
          placeholder="Contoh:johndee@gmail.com"
          value={email}
          onChangeText={val => setemail(val)}
          style={styles.inputText}
        />
        <Text style={{color: 'black'}}>Password</Text>
        <View>
          <TextInput
            placeholder="Masukkan password"
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
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigateText}>
        <Text style={styles.footerText}>Belum punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textClick}> Daftar di sini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
