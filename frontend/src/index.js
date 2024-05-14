import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import toast, { Toaster } from "react-hot-toast";
import AuthProvider from "./security/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <Toaster />
      </div>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
