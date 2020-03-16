import axios from 'axios';
import {API_KEY} from 'react-native-dotenv';

export const getProduct = () => {
//   console.log('ini di action redux');
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: `${API_KEY}/product`,
    }),
  };
};
