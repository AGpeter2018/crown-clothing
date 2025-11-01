import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./provider/cart/cart-context";
import {ApolloProvider} from 'react-apollo'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import gql from 'graphql-tag'

import { typesDefs, resolvers } from "./graphql/resolver";
import "./App.css";
import App from "./App"

// connect to graphQl server

const http = createHttpLink({
  uri: 'https://crwn-clothing.com'
})

// Create cache memory

const cache = new InMemoryCache()

// create apollo client

const client = new ApolloClient({
  link: http,
  cache,
  typesDefs,
  resolvers
})

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    cartItemCount: 0,
    cartTotal: 0
  }
})

client.query({
  query: gql`
  {
    getCollectionsByTitle(title: "hats") {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
  }
  `
}).then(res => console.log(res))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
  <CartProvider>
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
  </CartProvider>
  </ApolloProvider>
);
