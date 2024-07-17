import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Layout from "./utils/Layout";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Catalog from "./pages/Catalog";
import Orders from "./pages/Orders";
import StoreSettings from "./pages/StoreSettings";
import Register from "./pages/Register";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/store/dashboard/*"
            element={<ProtectedRoute Component={StoreDashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const StoreDashboard = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/catalogs" element={<Catalog />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/store-settings" element={<StoreSettings />} />
      </Routes>
    </Layout>
  );
};
export default App;
