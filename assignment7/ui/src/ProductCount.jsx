import React from 'react';
import graphQLFetch from './graphQLFetch.jsx'

export default class ProductCount extends React.Component {

  constructor() {
    super();
    this.totalProducts = null;
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  async loadData() {
    const query = `query { productCount }`;

    const data = await graphQLFetch(query);

    if (data) {
      this.totalProducts= data.productCount;
    }
  }

  render() {
    return (
      <div> Showing {this.totalProducts} available products</div>
    );
  }
}