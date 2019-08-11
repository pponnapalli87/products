import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CreateStore from './store'
import Product from  './containers/Products'

const store = CreateStore({ reset: true })

class App extends React.Component{
  render() {
    return(
      <Product />
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

