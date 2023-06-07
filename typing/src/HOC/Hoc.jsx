import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignupForm from "../Pages/SignupPage";
import LoginForm from "../Pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute";

const Hoc = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default Hoc;
