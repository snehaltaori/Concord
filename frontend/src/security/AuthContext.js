// Create a context
// put some state in the context
// share the created context with other components

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // creating a custom hook

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(0);
  const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem("jwtToken") ? true : false);

  function access() {
    setAuthenticated(true);
    console.log("accessed");
    return true;
  }
  function printAccess() {
    console.log("accessed: " + isAuthenticated);
  }

  // Authentication Logic
  async function login(username, password) {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // const jwtToken = response.headers.get("Authorization");
        const data = await response.json(); // Parse the JSON data from the response
        console.log(data); // Log the data to the console
        const jwtToken = data.token;
        console.log(jwtToken);
        console.log("Login successful");

        // Store JWT token in local storage or session storage
        localStorage.setItem("jwtToken", jwtToken);
        // Redirect to dashboard or any other protected route
        // window.location.href = "/dashboard";
        toast.success("Login Successful!");
        setAuthenticated(true);
        console.log(data);
      } else if (response.status === 404 || response.status === 400) {
        const data = await response.json(); // Parse the JSON data from the response

        toast.error(
          <div className="flex flex-col justify-center items-center px-4">
            <p className="font-semibold">Login Failed</p>
            <p className="text-center">
              {response.status === 404
                ? data.message.toString().slice(0, -4)
                : data.message}
            </p>
          </div>
        );
        console.error("Login failed");
      } else {
        toast.error(
          <div className="flex flex-col justify-center items-center px-4">
            <p className="font-semibold">Login Failed</p>
            <p>Unknown Error !</p>
          </div>
        );
        console.error("Login failed");
      }
    } catch (error) {
      toast.error(
        <div className="flex flex-col justify-center items-center px-4">
          <p className="font-semibold">Login Failed</p>
          <p>Internal Server Error !</p>
        </div>
      );
      console.error("Error:", error);
    }
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    // window.location.href = "/login";
    console.log("Logged out successfully");
    
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ number, isAuthenticated, login, access, printAccess, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
