import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Categorias from "../Pages/Categorias";
import Lista from "../Pages/Lista/indes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/lista/:id" element={<Lista />} />
    </Routes>
  );
}
