import { createContext, useContext, useEffect, useState } from "react";
import { products as mockProducts } from "../mocks/products.js";


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    setTimeout(() => {
      setProducts(mockProducts);
    }, 500); 
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
