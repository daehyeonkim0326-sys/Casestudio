import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main.js";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import "./assets/scss/global.scss";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product) => {
    setCartItems((prev) => {
      const existItem = prev.find((item) => item.id === product.id);

      if (existItem) {
        return prev.map((cart) =>
          cart.id === product.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ 여기에 있어야 CartPage로 전달 가능
  const handleUpdateQuantity = (id, type) => {
    setCartItems((prev) => {
      if (type === "plus") {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      if (type === "minus") {
        return prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // 0 되면 삭제
      }

      return prev;
    });
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter basename="/Lucky-dori">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main onAdd={handleAddCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdate={handleUpdateQuantity}
                onDelete={handleDelete}
              />
            }
          />
          <Route path="/category/:categoryName" 
          element={<CategoryPage onAdd={handleAddCart} />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

