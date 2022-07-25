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
import React, { useState, useEffect } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import MiniButton from '../../component/MiniButton3';
import { ApiprofileData, ApiChangeDataProfile } from '../../config/Api';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';


const Profile = ({ navigation: { goBack } }) => {
    const [eye, seteye] = useState('eye-outline');
    const [selected, setSelected] = React.useState('');

    const [harga, setharga] = useState('');
    const [nama, setnama] = useState('');
    const [alamat, setalamat] = useState('');
    const [gambar, setGam] = useState([]);
    const [no_hp, setHp] = useState({ assets: [{ uri: '' }] });
    const [image, setimage] = useState('');
    const [lokasi, setlokasi] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const data2 = [

        { key: '1', value: 'jakarta' },
        { key: '2', value: 'Bandung' },
        { key: '3', value: 'Surabaya' },
        { key: '4', value: 'Brebes' },
        { key: '5', value: 'Semarang' },
        { key: '6', value: 'Medan' },
        { key: '7', value: 'Jayapura' },
    ];


    const dispatch = useDispatch();
    const token = useSelector(state => state.global.accessToken);
    const dataAkun = useSelector(state => state.global.dataAkun);

    const data = {
        full_name: nama ,
        address: alamat,
        phone_number: no_hp,
        // image : gambar
    };

    const simpan = () => {
        if (
            nama == '' ||
            alamat == '' ||
            no_hp == '' 
        ) {
            Alert.alert('All fields are required');
            return false;
        }
        dispatch(ApiChangeDataProfile(token, data));
    };

    // const imagePicker = async () => {
    //     ImagePicker.openPicker({
    //       width: 450,
    //       height: 450,
    //       cropping: true,
    //     }).then(image => {
    //       console.log(image);
    //       const uploadUri =
    //         Platform.OS === 'IOS' ? image.path.replace('file://', '') : image.path;
    //       setgam(uploadUri);
    //     });
    //   };

    useEffect(() => {
        dispatch(ApiprofileData(token));
        console.log(token)
        console.log(dataAkun)
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image
                            source={require('../../assets/icon/fi_arrow-left.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textHeader}>Ubah akun</Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.wrapperIcon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../assets/icon/fi_camera.png')}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                marginBottom: 30,
                            }}>
                            <MiniButton textButton={'Ubah foto profile akun'} />
                        </View>

                        <Text style={{ color: 'black' }}>Nama*</Text>

                        <TextInput placeholder="Nama Lengkap" value={nama} onChangeText={val => setnama(val)} style={styles.inputText} />


                        <Text style={{ color: 'black' }}>Kota*</Text>
                        <View>
                            <SelectList
                                data={data2}
                                setSelected={setSelected}
                                dropdownStyles={{ backgroundColor: '#E2D4F0' }}
                                dropdownItemStyles={{ marginHarizontal: 10 }}
                                dropdownTextStyles={{ color: 'black' }}
                                placeholder="Pilih kota"
                                maxHeight={200}
                                boxStyle={{ color: 'red' }}
                            />
                        </View>

                        <Text style={{ color: 'black', marginTop: '6%' }}>Alamat*</Text>
                        <View>
                            <TextInput
                                placeholder="Contoh: Jalan Ikan Hiu 333"
                                value={alamat} onChangeText={val => setalamat(val)}
                                style={styles.inputTextAlamat}
                            />
                        </View>

                        <Text style={{ color: 'black' }}>No Handphone*</Text>
                        <TextInput
                            placeholder="contoh: +628123456789"

                            value={no_hp} onChangeText={val => setHp(val)}
                            style={styles.inputText}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => simpan()}>
                            <Text style={styles.buttonText}>Simpan perubahan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

    </View>
  );
};

export default Profile;

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
  inputText: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#D0D0D0',
    position: 'relative',
    marginBottom: 20,
  },
  inputTextAlamat: {
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    marginTop: 8,
    borderColor: '#D0D0D0',
    position: 'relative',
    marginBottom: 25,
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
    marginBottom: 60,
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
  header1: {
    flexDirection: 'row',
    marginBottom: 34,
  },
  textHeader: {
    alignItems: 'center',
    color: 'black',
    fontWeight: '600',
  },
});

