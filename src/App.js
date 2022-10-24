import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Products from "./components/Products";
import "./App.css";

const query = new QueryClient();

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Fetching Products - React-Query</h1>
        <QueryClientProvider client={query}>
          <Products />
        </QueryClientProvider>
      </div>
    </div>
  );
}
