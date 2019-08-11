import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Product from '../Product'
import '../../css/styles.css'

const displayMessage = (message) => (
  <div className="message">
    <h1>{message}</h1>
  </div>
)

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterBy: ''
    }

    this.changeFilterOption = this.changeFilterOption.bind(this)
  }

  changeFilterOption(e) {
    var val = e.target.value;
    this.setState({ filterBy: val })
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const { error, loading, products } = this.props

    return (
      <React.Fragment>
        {loading && (displayMessage('Loading...'))}
        {error && (displayMessage('Something went wrong'))}
        {products.length > 0 && (
          <React.Fragment>
            <header>
              <h3>Women's tops</h3>
              <select required id="size" placeholder="Filter by size" value={this.state.filterBy} onChange={this.changeFilterOption.bind(this)}>
                <option value="" disabled>Filter by size</option>
                {['XS', 'S', 'M', 'L', 'XL'].map(function(option) {
                  return ( <option key={option} value={option}>{option}</option> )
                })}
              </select>
            </header>
            <div className="products">
              {products.map(product => (this.state.filterBy === '' || product.size.includes(this.state.filterBy.toString())) && (
                <Product
                  key={product.index}
                  {...product}
                />
              ))}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

Products.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    isSale: PropTypes.bool.isRequired,
    isExclusive: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    size: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired),
  error: PropTypes.bool,
}

Products.defaultProps = {
  products: [],
  loading: false,
  error: false
}

export default Products