import React from 'react';

import Contents from './Contents.jsx';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand> My Company Inventory</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Product List</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <OverlayTrigger
            placement="left"
            delayShow={1000}
            overlay={<Tooltip id="create-issue">Create Product</Tooltip>}
          >
            <Glyphicon glyph="plus" />
          </OverlayTrigger>
        </NavItem>
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <MenuItem>About</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <p className="text-center">
        Full source code available at this
        {' '}
        <a href="https://github.com/jorgech1993/CS648--Modern-Full-Stack-Dev/tree/master/assignment6">
          GitHub repository
        </a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
      <Footer />
    </div>
  );
}