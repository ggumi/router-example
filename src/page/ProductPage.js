import React from 'react';
import { useSearchParams } from 'react-router-dom';
import App from '../App'

const ProductPage = () => {
    let [query,setQuery] = useSearchParams();
    console.log("dddd",query.get("page"));
  return (
    <div>
      <h1>Show All Products!!</h1>


    </div>
  );
};

export default ProductPage;