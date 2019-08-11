import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import Products from '../components/Products';

const mapStateToProps = ({ products: { error, loading, products }}) => {
  return { error, loading, products }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);