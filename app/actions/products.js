import action from './action'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'

export function getProducts() {
  return action(GET_PRODUCTS)
}