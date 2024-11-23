import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Vendor from "./pages/Vendor.jsx";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  console.log(isLogin);
  return (
    <main className="bg-body">
      <BrowserRouter>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <main className="p-5">
          <Routes>
            <Route
              path="/"
              element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="vendor/:vendorId" element={<Vendor />} />
            <Route path="/Wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
