import { ProductAction, ProductActionTypes, ProductState } from "../../types/product"

const initialState: ProductState = {
  products: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {...state, loading: true}
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products: action.payload}
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {...state, loading: false, error: action.payload}
    case ProductActionTypes.SET_PRODUCTS_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}