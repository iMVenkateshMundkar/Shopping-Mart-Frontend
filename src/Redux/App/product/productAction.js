import * as actionTypes from "./productActionTypes";
import axios from "axios";

export const getProducts = ({pageNumber, sortBy}) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  return await axios
    .get(`/api/products/?page=${pageNumber}&sort=${sortBy}`)
    .then((r) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  return await axios
    .get(`/api/products/${id}`)
    .then((r) => {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};