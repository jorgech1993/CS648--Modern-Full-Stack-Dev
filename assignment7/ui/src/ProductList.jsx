import React from 'react';

import ProductTable from './ProductTable.jsx';
import graphQLFetch from './graphQLFetch.jsx';

export default class Inventory extends React.Component {
  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id category productName pricePerUnit imageUrl
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.productDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
      this.loadData();
    }
  }
  render() {
    return (
      <React.Fragment>
        <ProductTable products={this.state.products} deleteProduct={this.deleteProduct}/>
      </React.Fragment>
    );
  }
}