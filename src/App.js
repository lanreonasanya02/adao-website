// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import Products from "./pages/products/Products";
// import AdaoOne from "./pages/collections/AdaoOne";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="products" element={<Products />} /> */}
        {/* <Route path="adao-1" element={<AdaoOne />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
