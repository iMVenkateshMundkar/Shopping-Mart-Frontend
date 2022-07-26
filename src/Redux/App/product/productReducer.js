import * as actionType from "./productActionTypes";

const initialState = {
  products: [],
  singleProduct: {},
  brands: [],
  isLoading: false,
  error: "",
};

export const getProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case actionType.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        singleProduct: payload,
        isLoading: false,
      };

    case actionType.GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case actionType.GET_BRANDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionType.GET_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brands: payload,
      };

    case actionType.GET_BRANDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
