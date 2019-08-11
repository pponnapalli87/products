import { GET_PRODUCTS, GET_PRODUCTS_SUCCEEDED, GET_PRODUCTS_FAILED } from '../actions/products'

const INITIAL_STATE = {
  loading: false,
  products: [],
  error: false
}

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return Object.assign({}, state, { error: false, loading: true })
    }
    case GET_PRODUCTS_SUCCEEDED: {
      const { products } = action.payload

      return Object.assign({}, state, { error: false, loading: false, products })
    }
    case GET_PRODUCTS_FAILED: {
      return Object.assign({}, state, { loading: false, error: true })
    }
    default: {
      return state
    }
  }
}