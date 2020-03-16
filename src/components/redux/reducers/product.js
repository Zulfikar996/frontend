const initialState = {
  product: [],
};

export default ( product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_PENDING':
      console.log('pending');
      return {
        ...state,
      };
    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
      };
    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        product: action.payload.data.result,
      };
    default:
      return state;
  }
});
