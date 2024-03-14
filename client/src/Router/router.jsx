import { Route } from "react-router-dom";
import LoginPage from "../Pages/Auth/LoginPage";
import RegistPage from "../Pages/Auth/RegistPage";
import Home from "../Pages/Home";

const route = [
  <Route path="/login" element={<LoginPage />} />,
  <Route path="/regist" element={<RegistPage />} />,
  <Route path="/" element={<Home />} />,
];

export default route;
