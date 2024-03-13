import { Route } from "react-router-dom";
import LoginPage from "../Pages/Auth/LoginPage";
import RegistPage from "../Pages/Auth/RegistPage";

const route = [
  <Route path="/login" element={<LoginPage />} />,
  <Route path="/regist" element={<RegistPage />} />,
];

export default route;
