import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';

const NotFound = () => <h1>Page Not Foumd </h1>;

export default function Contents() {
	return (
		<Switch>
			<Redirect exact from="/" to="/products" />
			<Route path="/products" component={ProductList} />
			<Route component={NotFound} />
		</Switch>
	);
}