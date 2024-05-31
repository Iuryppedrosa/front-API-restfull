import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/index.js";
import Books from "./pages/Books/index.js";
import NewBook from "./pages/NewBook/index.js";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/new/:bookId" element={<NewBook />} />
      </Routes>
    </BrowserRouter>
  );
}
