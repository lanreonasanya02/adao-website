// import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />

        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
