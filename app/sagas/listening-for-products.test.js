import { call, put, take } from 'redux-saga/effects'

import listeningForProducts, { fetchApi } from './listening-for-products'

describe('Listening For Products saga', () => {
  it('does fetch products on success', () => {
    const generator = listeningForProducts()

    let next

    next = generator.next()

    expect(next.value).toEqual(take('GET_PRODUCTS'))

    next = generator.next()

    expect(next.value).toEqual(call(fetchApi, 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'))

    const products = [
      {
        "index": 0,
        "isSale": true,
        "isExclusive": false,
        "price": "$18.88",
        "productImage": "product-1.jpg",
        "productName": "Striped shirt",
        "size": ["XS", "S", "L", "XL"]
      }
    ]
    next = generator.next(products)

    expect(next.value).toEqual(put({ type: 'GET_PRODUCTS_SUCCEEDED', payload: { products } }))
  })

  it('does return error on failure', () => {
    const generator = listeningForProducts()

    let next

    next = generator.next()

    expect(next.value).toEqual(take('GET_PRODUCTS'))

    next = generator.next()

    expect(next.value).toEqual(call(fetchApi, 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'))

    expect(generator.throw('error').value).toEqual(put({ type: 'GET_PRODUCTS_FAILED', payload: { error: 'error' } }))
  })
})