import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import Products from "./pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/products/:itemId" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
