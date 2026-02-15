// import React from "react";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
//NON Lazy Imports
import Home from "./pages/Home";

//Lazy Imports
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Jobs = lazy(() => import("./pages/Jobs"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}



export default App;
