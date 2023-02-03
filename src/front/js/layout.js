import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Single } from "./pages/single";
import { Shop } from "./pages/shop";
import { ShoppingCart } from "./pages/shopping-cart";
import injectContext from "./store/appContext";
import { Detail } from "./pages/detail_product";
import { Payments } from "./pages/payment.js";
import { Categoria } from "./pages/categoryList";
import { NewCategory } from "./pages/createCategory";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Product } from "./pages/product";
import { Create } from "./pages/create_product";
import { Shipping } from "./pages/shipping";
import { Register } from "./pages/userRegister";
import { Users } from "./pages/users";
import { EditUser } from "./pages/edit_user";
import { Pedidos } from "./pages/pedidos";
import { DetailCategory } from "./component/detail_category";
import { EditCategory } from "./pages/editCategory";
import { EditProduct } from "./pages/editProducto1";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            {/* <Route element={<Demo />} path="/demo" /> */}
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/registro_usuario" />
            <Route element={<Users />} path="/users" />
            <Route element={<EditUser />} path="/edit_user" />
            <Route element={<Pedidos />} path="/pedidos" />
            {/* <Route element={<Single />} path="/single/:theid" /> */}
            <Route element={<Shop />} path="/shop" />
            <Route element={<Product />} path="/products" />
            <Route element={<Create />} path="/create_product" />
            <Route element={<EditProduct />} path="/edit_product/:id" />
            <Route element={<ShoppingCart />} path="/shopping-cart" />
            <Route element={<Shipping />} path="/shipping" />
            <Route element={<Detail />} path="/detail_product/:id" />
            <Route element={<DetailCategory />} path="/detail_category/:id/:nombre" />
            <Route element={<Payments />} path="/payment" />
            <Route element={<Categoria />} path="/categoryList" />
            <Route element={<NewCategory />} path="/createCategory" />
            <Route element={<EditCategory />} path="/edit-categoria/:id" />
            {/* <Route element={<Pay_success />} path="/pay_success" />
            <Route element={<Pay_failure />} path="/pay_failure" />
            <Route element={<Pay_pending />} path="/pay_pending" />
  */}
            <Route
              path="*"
              element={
                <h1 className="text-center alert alert-info my-5 p-5">
                  Oops! El recurso solicitado no está disponible
                </h1>
              }
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
