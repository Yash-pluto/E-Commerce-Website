import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/Pages/LoginPage";
import RegisterPage from "../src/Pages/RegisterPage";
import ShopPage from "./Pages/ShopPage";
import AdminPage from "./Pages/AdminPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
