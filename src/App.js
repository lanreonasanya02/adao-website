// import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Adao1 from "./pages/collections/Adao1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="adao-1" element={<Adao1 />} />

        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
