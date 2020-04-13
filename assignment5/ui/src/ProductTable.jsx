import React from 'react';

function ProductRow(props) {
  const { product } = props;
  return (
    <tr>
      <td className="bordered-table">{product.productName}</td>
      <td className="bordered-table">{`$${product.pricePerUnit}`}</td>
      <td className="bordered-table">{product.category}</td>
      <td className="bordered-table">
        {' '}
        <a href={product.imageUrl} rel="noopener noreferrer" target="_blank">View</a>
      </td>
    </tr>
  );
}

export default function InventoryTable(props) {
  const productRows = props.products.map(product => <ProductRow key={product.id} product={product} />);

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th className="bordered-table">Product Name</th>
          <th className="bordered-table">Price</th>
          <th className="bordered-table">Category</th>
          <th className="bordered-table">Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}