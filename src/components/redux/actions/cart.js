import axios from "axios";
import {API_KEY} from 'react-native-dotenv';

export const postCart = data => {
  return {
    type: "POST_CART",
    payload: { data }
  };
};

export const manipulateItem = data => {
  return {
    type: "MANIPULATE_ITEM",
    payload: { data }
  };
};

export const deleteCart = id => {
  return {
    type: "DELETE_CART",
    payload: { id }
  };
};

export const checkout = data => {
  return {
    type: "CHECKOUT",
    payload: axios({
      method: "POST",
      url: `http://192.168.1.21:4444/transaction`,
      data: data
    })
  };
};