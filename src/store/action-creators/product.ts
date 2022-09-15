import axios from "axios"
import { Dispatch } from "redux"
import { ProductAction, ProductActionTypes } from "../../types/product"

export const fetchProducts = (page = 1, limit = 10) => {
  
  const REACT_APP_PRODUCTS_URL = "https://fakestoreapi.com/products";

  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS
      })
      const response = await axios.get(REACT_APP_PRODUCTS_URL, {
        params: {
          _page: page,
          _limit: limit
        }
      })
      setTimeout(() => {
        dispatch({
          type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data
        })
      }, 500);
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Error fetch data ' + error})
    }
  }
}

export function setProductPage(page: number): ProductAction {
  return {
    type: ProductActionTypes.SET_PRODUCTS_PAGE, payload: page
  }
}