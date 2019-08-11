import React from 'react'
import PropTypes from 'prop-types'

import '../css/styles.css'

const Product = ({
  index, isExclusive, isSale, price, productImage, productName
}) => (
  <div
    key={index}
    className="product"
  >
    <img src={require('../images/' + productImage )} alt="" width="100%" height="75%" />
    <div className="productDetails">
      {isExclusive && (<div className="exclusive">Exclusive</div>)}
      {isSale && (<div className="sale">Sale</div>)}
      <div className="productInfo">
        <p>{productName}</p>
        <p>{price}</p>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  index: PropTypes.number.isRequired,
  isSale: PropTypes.bool.isRequired,
  isExclusive: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
}

export default Product