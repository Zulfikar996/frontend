import axios from 'axios';
import {API_KEY} from 'react-native-dotenv';

export const addUser = (data) => {
  console.log('ini di action redux');
  return {
    type: 'POST_USER',
    payload: axios({
      method: 'POST',
      url: `${API_KEY}/user/register`,
      data:data,
    }),
  };
};
