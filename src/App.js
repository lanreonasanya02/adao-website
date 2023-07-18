import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Products from "./pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="/products/:itemId" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Contact from "./pages/contact/Contact";
/* <Route path="contact" element={<Contact />} /> */
