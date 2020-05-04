import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
  render() {

    let products = [
      {
        id: 1,
        slug:'ip',
        name: 'sp1',
        price: 1100000
      },
      {
        id: 2,
        slug:'ss',
        name: 'sp2',
        price: 1100000
      },
      {
        id: 3,
        slug:'op',
        name: 'sp3',
        price: 1100000
      }
    ];

    let {match} = this.props;
    let url = match.url;
    
    let result = products.map((product, index)=>{
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id}-{product.name}-{product.price}
          </li>
        </NavLink>
      );
    })

    return (
      <div className="col-lg-6 m-auto">
        <p>Danh sach san pham</p>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>
        <div className="row">
          <ul className="list-group">
            <Route path="/products/:slug" component={Product}></Route>
          </ul>
        </div>
      </div>
    );
  }
}

export default Products;
