export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  SET_PRODUCTS_PAGE = "SET_PRODUCTS_PAGE"
}

export interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS
}
interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: any[]
}
interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
  payload: string
}
interface SetProductPage {
  type: ProductActionTypes.SET_PRODUCTS_PAGE,
  payload: number
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction | SetProductPage;
