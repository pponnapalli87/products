import { put, take } from 'redux-saga/effects'
import { camelizeKeys } from 'humps'

import { GET_PRODUCTS, GET_PRODUCTS_SUCCEEDED, GET_PRODUCTS_FAILED } from '../actions/products'

export default function* listeningForProducts() {
  try {
    while (true) {
      yield take(GET_PRODUCTS)
      const result = yield fetch('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
                      .then(response => response.json())

      yield put({ type: GET_PRODUCTS_SUCCEEDED, payload: { products: camelizeKeys(result) } })
    }
  }
  catch (error) {
    yield put({ type: GET_PRODUCTS_FAILED, payload: { error } })
  }
}