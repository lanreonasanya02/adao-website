import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import NotFound from "./pages/not-found/NotFound";
import Exhibitions from "./pages/exhibitions/Exhibitions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products/:itemId" element={<Products />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import News from "./pages/news/News";
// import Contact from "./pages/contact/Contact";
/* <Route path="contact" element={<Contact />} /> */
/* <Route path="news" element={<News />} /> */
