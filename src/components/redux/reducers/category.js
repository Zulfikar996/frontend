const initialState = {
  category: [],
};

export default ( category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING':
      return {
        ...state,
      };
    case 'GET_CATEGORY_REJECTED':
      return {
        ...state,
      };
    case 'GET_CATEGORY_FULFILLED':
      return {
        ...state,
        category: action.payload.data.result,
      };
    default:
      return state;
  }
});
