import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
  Button, ButtonToolbar, Tooltip, OverlayTrigger, Col, TextInput, NumInput
} from 'react-bootstrap';

import graphQLFetch from './graphQLFetch.jsx';

class ProductAddNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  showError(message) {
    this.setState({
    });
  }

  dismissToast() {
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.productAdd;
    const product = {
      category: form.category.value,
      pricePerUnit: form.pricePerUnit.value.replace('$', ''),
      productName: form.productName.value,
      imageUrl: form.imageUrl.value,
    };

    const query = `mutation productAdd($product: ProductInputs!) {
      productAdd(product: $product) {
        id
      }
    }`;

    form.category.value = 'Shirts';
    form.pricePerUnit.value = '$';
    form.productName.value = '';
    form.imageUrl.value = '';

    const data = await graphQLFetch(query, { product }, this.showError);
    if (data) {
      const { history } = this.props;
      history.push(`/`);
    }
  }

  render() {
    const { showing } = this.state;
    return (
      <React.Fragment>
        <NavItem onClick={this.showModal}>
          <OverlayTrigger
            placement="left"
            delayShow={1000}
            overlay={<Tooltip id="create-issue">Create Product</Tooltip>}
          >
            <Glyphicon glyph="plus" />
          </OverlayTrigger>
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="productAdd">
              <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>Product Name</Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  name="productName"
                  onChange={this.onChange}
                />
              </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>Category</Col>
                <Col sm={9}>
                  <FormControl
                    componentClass="select"
                    name="category"
                    onChange={this.onChange}
                  >
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Accessories">Accessories</option>
                  </FormControl>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>Price Per Unit</Col>
                <Col sm={9}>
                  <FormControl
                    componentClass={NumInput}
                    name="pricePerUnit"
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>Image URL</Col>
                <Col sm={9}>
                  <FormControl
                    componentClass={TextInput}
                    name="imageUrl"
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button
                type="button"
                bsStyle="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
              <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProductAddNavItem);