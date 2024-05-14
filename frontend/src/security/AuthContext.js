// Create a context
// put some state in the context
// share the created context with other components

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // creating a custom hook

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(0);
  const [isAuthenticated, setAuthenticated] = useState(false);

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
      } else {
        // Handle login error
        // toast.error("Login failed \n Wrong Credentials used!");
        toast.error(
          <div className="flex flex-col justify-center items-center px-11">
            <p className="font-semibold">Login Failed</p> Wrong Credentials
            used!
          </div>
        );
        console.error("Login failed");
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    
    
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ number, isAuthenticated, login, access, printAccess }}
    >
      {children}
    </AuthContext.Provider>
  );
}
