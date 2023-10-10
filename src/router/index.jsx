import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const Router = ({ searchValue, setSearchValue }) => {
  return (
    <React.Fragment>
      <Routes>
        <Route index path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};
export default Router;
