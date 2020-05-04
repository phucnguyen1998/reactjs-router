import React, { Component } from 'react';

class Product extends Component {

  render() {
    let match = this.props.match;
    let slug = match.params.slug;
    console.log(slug);
    return (
      <div>chi tiet</div>
    );
  }
}

export default Product;
