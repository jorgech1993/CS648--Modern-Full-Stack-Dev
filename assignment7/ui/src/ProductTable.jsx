import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';

const ProductRow = withRouter(({
  product, deleteProduct, index,
}) => {

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(index);
  }

  const editTooltip = (
    <Tooltip id="close-tooltip" placement="top">Edit Product</Tooltip>
  );

    const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
  );

  return (
    <tr>
      <td className="bordered-table">{product.productName}</td>
      <td className="bordered-table">{`$${product.pricePerUnit}`}</td>
      <td className="bordered-table">{product.category}</td>
      <td className="bordered-table">
        {' '}
        <a href={product.imageUrl} rel="noopener noreferrer" target="_blank">View</a>
      </td>
      <td>
        <LinkContainer to={`/edit/${product.id}`}>
          <OverlayTrigger delayShow={1000} overlay={editTooltip}>
            <Button bsSize="xsmall">
              <Glyphicon glyph="edit" />
            </Button>
          </OverlayTrigger>
        </LinkContainer>
        {' '}
        <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={onDelete}>
            <Glyphicon glyph="trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
});

export default function InventoryTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th className="bordered-table">Product Name</th>
          <th className="bordered-table">Price</th>
          <th className="bordered-table">Category</th>
          <th className="bordered-table">Image</th>
          <th className="bordered-table">Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}