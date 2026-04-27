import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Pages/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./Pages/Register.jsx";
import App from "./App.jsx";
import AuthContextComp from "./store/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   <Login />
  // </StrictMode>
  <AuthContextComp>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AuthContextComp>,
);
