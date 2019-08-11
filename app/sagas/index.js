import { fork, } from 'redux-saga/effects'

import listeningForProducts from './listening-for-products'

export default function* root() {
  yield fork(listeningForProducts)
}