import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  CartPage,
  DashboardPage,
  DetailProductPage,
  ErrorPage,
  MainPage,
  OrderPage,
  ProductPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  StorePage,
  ProductsStorePage,
  SettingStorePage,
} from "./pages";
import ProtectedRoute from "./ProtectedRoute";
import EditProductPage from "./pages/dashboard/stores/edit-product";

const App = () => {
  const isLogin = Boolean(useSelector((state) => state.auth.data?.email));

  return (
    <Router>
    <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category/:item" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product/:uuid" element={<DetailProductPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/orders"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/stores"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <StorePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/stores/:slug"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <ProductsStorePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/stores/:slug/:uuid"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <EditProductPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/stores/:slug/settings"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <SettingStorePage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
