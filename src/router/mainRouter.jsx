import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Cart from "../modules/cart";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
