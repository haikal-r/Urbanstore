import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import { Route, Routes } from "react-router-dom"; 
import SignInPage from "./pages/sign-in";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profile";
import CartPage from "./pages/cart";
import SignUpPage from "./pages/sign-up";
import DetailProductPage from "./pages/detailProduct";
import ErrorPage from "./pages/404";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<ProductPage />} errorElement={<ErrorPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products/category/:item" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
