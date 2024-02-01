import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<ProductPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/category/:item" element={<ProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/products/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
