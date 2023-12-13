import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { Routes , Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const Product = <ProductForm addProduct={addProduct} />;
  return (
    <div>
      <h1>Add Product</h1>
      {Product}
      <h2>Products</h2>
      <ul>
        {products.map((product, item) => {
          return (
            <span key={item}>
              {product.name} - ${product.price}
            </span>
          );
        })}
      </ul>
    </div>
  );
};


function App() {
 
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };


  return (
    <>
     <Home />
     <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
     </Routes>
    </>
  )
}

export default App
