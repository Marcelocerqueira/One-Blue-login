
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register/register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
