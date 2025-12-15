import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";
import { Feed } from "./pages/Feed/index.jsx";
import { BlogPost } from "./pages/BlogPost/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Feed />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
