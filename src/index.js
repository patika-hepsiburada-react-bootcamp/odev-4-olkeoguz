import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router> 
    <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
