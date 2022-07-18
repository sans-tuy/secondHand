import axios from 'axios';
import {
  setAccessToken,
  setDataProduct,
  setFavorite,
  setNotif,
  setProduct,
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

const ApiGetWishlist = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/wishlist', {
      headers: {access_token: `${token}`},
    })
    .then(val => {
      dispatch(setFavorite(val.data));
    })
    .catch(err => console.log(err));
};

const ApiGetNotif = token => dispatch => {
  axios
    .get('https://market-final-project.herokuapp.com/buyer/wishlist', {
      headers: {access_token: `${token}`},
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
      headers: {access_token: `${token}`},
    })
    .then(val => {
      dispatch(setProduct(val.data));
      console.log('Product: ', val.data);
    })
    .catch(err => console.log(err));
};

const ApiPostProduct = (token, data) => async dispatch => {
  const {name, description, base_price, location, image, category_ids} = data;
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

export {
  ApiLogin,
  ApiRegister,
  ApiGetWishlist,
  ApiGetNotif,
  ApiGetProduct,
  ApiPostProduct,
  ApiGetHome,
};
