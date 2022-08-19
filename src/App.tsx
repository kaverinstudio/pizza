// @ts-ignore
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/scss/app.scss";
// @ts-ignore
import Header from "./components/Header.tsx";
import Home from "./pages/Home";
// @ts-ignore
import NoFound from "./pages/NoFound.tsx";
// @ts-ignore
import Cart from "./pages/Cart.tsx";
// @ts-ignore
import FullPizza from "./components/PizzaBlock/FullPizza.tsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
