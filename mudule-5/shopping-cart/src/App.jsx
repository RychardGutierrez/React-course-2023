import { products as initialProducts } from './mocks/data.json';

import Products from './components/Products';
import { useState } from 'react';
import Header from './components/Header';
import { useFilters } from './hooks/useFilters';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
