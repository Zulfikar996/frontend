import {combineReducers} from 'redux';
import category from './category';
import product from './product';
import promo from './promo';
import newProduct from './product';
import promolebaran from './promo';
import filterProduct from './product';
import user from './user'

export default combineReducers({
  category,
  product,
  promo,
  newProduct,
  promolebaran,
  filterProduct,
  user,
});
