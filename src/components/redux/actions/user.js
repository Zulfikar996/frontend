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
export const editUser = (userId,data) => {
  // console.log('ini di action redux');
  return {
    type: 'EDIT_USER',
    payload: axios({
      method: 'PATCH',
      url: `${API_KEY}/user/${userId}`,
      data:data,
    }),
  };
};
