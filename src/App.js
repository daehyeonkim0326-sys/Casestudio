import "./assets/scss/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage.js";
import CategoryPage from "./pages/CategoryPage.js";
import Main from "./pages/Main.js";
import Layout from "./layout/Layout.js";


const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Main />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/category" element={<CategoryPage />}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
