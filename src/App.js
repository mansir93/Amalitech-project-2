import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Invoice from "./Pages/Invoice";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
