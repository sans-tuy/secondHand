import axios from 'axios';
import {
  setAccessToken,
  setDataProduct,
  setFavorite,
  setNotif,
  setProduct,
  setDataProductById,
  setDataProductOrderById,
  setDataListProductOrder,
  setDataOrder,
  setDataBanner,
  setDataUser,
  setProfileData,

} from '../Redux/reducer';
import * as navigation from '../Router/rootNavigation';

const ApiLogin = data => dispatch => {
  axios
    .post('https://market-final-project.herokuapp.com/auth/login', data)
    .then(val => {
      console.log(val.data.access_token);
      dispatch(setAccessToken(val.data.access_token));
      navigation.navigate('MainApp');
    })
    .catch(err => console.log(err));
};

const ApiRegister = data => () => {
  axios
    .post('https://market-final-project.herokuapp.com/auth/register', data)
    .then(val => {
      console.log(val.data);
      navigation.navigate('Login');
    })
    .catch(err => console.log(err));
};

const ApiGetUser = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/auth/user', {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      dispatch(setDataUser(val.data));
    })
    .catch(err => console.log(err));
};

const ApiGetWishlist = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/wishlist', {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      dispatch(setFavorite(val.data));
    })
    .catch(err => console.log(err));
};

const ApiGetNotif = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/wishlist', {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      dispatch(setNotif(val.data));
      console.log('Notif: ', val.data);
    })
    .catch(err => console.log(err));
};

const ApiGetHome = () => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/product')
    .then(val => {
      const data = val.data;
      dispatch(setDataProduct(data));
    })
    .catch(err => {
      console.log(err);
    });
};

const ApiGetProduct = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/seller/product', {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      dispatch(setProduct(val.data));
      console.log('Product: ', val.data);
    })
    .catch(err => console.log(err));
};

const ApiGetProductById = (token, id) => async dispatch => {
  axios
    .get(`https://market-final-project.herokuapp.com/buyer/product/${id}`, {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      const data = val.data;
      dispatch(setDataProductById(data));
    })
    .catch(err => console.log(err));
};

const ApiPostProduct = (token, data) => async dispatch => {
  const { name, description, base_price, location, image, category_ids } = data;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('base_price', base_price);
  formData.append('location', location);
  formData.append('category_ids', category_ids);
  formData.append('image', {
    uri: image,
    type: 'image/jpeg',
    name: 'photo.jpg',
  });
  await axios
    .post(
      'https://market-final-project.herokuapp.com/seller/product',
      formData,
      {
        headers: {
          access_token: `${token}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      },
    )
    .then(res => {
      console.log('upload sukses');
    })
    .catch(err => console.log(err));
};

const ApiOrder = (token, data) => () => {
  axios
    .post('https://market-final-project.herokuapp.com/buyer/order', data, {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      setDataOrder(val.data);
      // console.log(val.data);
    })
    .catch(err => console.log(err));
};

const ApiListOrderById = (token, id) => async dispatch => {
  axios
    .get(`https://market-final-project.herokuapp.com/buyer/order/${id}`, {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      const data = val.data;
      dispatch(setDataProductOrderById(data));
      console.log(data);
    })
    .catch(err => console.log(err));
};

const ApiListOrder = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/order', {
      headers: { access_token: `${token}` },
    })
    .then(val => {
      const data = val.data;
      dispatch(setDataListProductOrder(data));
      // console.log(data);
    })
    .catch(err => console.log(err));
};

const ApiGetBanner = () => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/seller/banner')
    .then(val => {
      const data = val.data;
      dispatch(setDataBanner(data));
    })
    .catch(err => {
      console.log(err);
    });
};

const ApiprofileData = (accessToken) => async dispatch => { //method yang di panggil nanti di screen
  try {
    await axios.get('https://market-final-project.herokuapp.com/auth/user', {
      headers: {
        access_token: accessToken,
      }
    })
      .then(value => {
        console.log(value.data);
        dispatch(setProfileData(value.data));
        console.log('Get profile Success');

      });
  } catch (error) {
    console.log(error);
  }
};

const ApiChangeDataProfile = (token, data) => async dispatch => {
  const { full_name, city, address, image } = data;
  const formData = new FormData();
  formData.append('full_name', full_name);
  formData.append('city', city);
  formData.append('address', address);
  formData.append('image', {
    uri: image,
    type: 'image/jpeg',
    name: 'photo.jpg',
  });
  await axios.put(
    'https://market-final-project.herokuapp.com/auth/user',
    formData,
    {
      headers: {
        access_token: `${token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    },
  )
    .then(res => {
      console.log('upload sukses');
    })
    .catch(err => console.log(err));
};

export {
  ApiLogin,
  ApiRegister,
  ApiGetWishlist,
  ApiGetNotif,
  ApiGetProduct,
  ApiPostProduct,
  ApiGetHome,
  ApiOrder,
  ApiGetProductById,
  ApiListOrder,
  ApiListOrderById,
  ApiGetBanner,
  ApiGetUser,
  ApiprofileData,
  ApiChangeDataProfile,

};
