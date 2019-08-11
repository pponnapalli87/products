import React from 'react';
import { shallow } from 'enzyme';

import Product from './Product'

describe('Product component', () => {
  it('does render Product', () => {
    const product = {
      index: 0,
      isExclusive: false,
      isSale: false,
      price: "12.00$",
      productImage: "product-1.jpg",
      productName: "denim shirt"
    }
    const component = shallow(<Product {...product} />);
  
    expect(component.find('img').length).toBe(1);
    expect(component.find('p').length).toBe(2);
  });
});