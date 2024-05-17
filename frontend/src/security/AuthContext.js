// Create a context
// put some state in the context
// share the created context with other components

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // creating a custom hook

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(0);
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("jwtToken") ? true : false
  );

  function access() {
    setAuthenticated(true);
    console.log("accessed");
    return true;
  }
  function printAccess() {
    console.log("accessed: " + isAuthenticated);
  }

  // Authentiation Logic
  // async function login(username, password) {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/v1/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       // const jwtToken = response.headers.get("Authorization");
  //       const data = await response.json(); // Parse the JSON data from the response
  //       console.log(data); // Log the data to the console
  //       const jwtToken = data.token;
  //       console.log(jwtToken);
  //       console.log("Login successful");

  //       // Store JWT token in local storage or session storage
  //       localStorage.setItem("jwtToken", jwtToken);
  //       // Redirect to dashboard or any other protected route
  //       // window.location.href = "/dashboard";
  //       toast.success("Login Successful!");
  //       setAuthenticated(true);
  //       flag=1;
  //       console.log(data);
  //     } else if (response.status === 404 || response.status === 400) {
  //       const data = await response.json(); // Parse the JSON data from the response

  //       toast.error(
  //         <div className="flex flex-col justify-center items-center px-4">
  //           <p className="font-semibold">Login Failed</p>
  //           <p className="text-center">
  //             {response.status === 404
  //               ? data.message.toString().slice(0, -4)
  //               : data.message}
  //           </p>
  //         </div>
  //       );
  //       console.error("Login failed");
  //     } else {
  //       toast.error(
  //         <div className="flex flex-col justify-center items-center px-4">
  //           <p className="font-semibold">Login Failed</p>
  //           <p>Unknown Error !</p>
  //         </div>
  //       );
  //       console.error("Login failed");
  //     }
  //   } catch (error) {
  //     toast.error(
  //       <div className="flex flex-col justify-center items-center px-4">
  //         <p className="font-semibold">Login Failed</p>
  //         <p>Internal Server Error !</p>
  //       </div>
  //     );
  //     console.error("Error:", error);
  //   }
  // }

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
        const data = await response.json(); // Parse the JSON data from the response
        console.log(data); // Log the data to the console
        const jwtToken = data.token;
        console.log(jwtToken);
        console.log("Login successful");

        // Store JWT token in local storage or session storage
        localStorage.setItem("jwtToken", jwtToken);

        // Notify login success
        toast.success("Login Successful!");

        // Set authenticated state
        setAuthenticated(true);

        // Return success status
        return { success: true };
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

        // Return failure status
        return { success: false };
      } else {
        toast.error(
          <div className="flex flex-col justify-center items-center px-4">
            <p className="font-semibold">Login Failed</p>
            <p>Unknown Error!</p>
          </div>
        );
        console.error("Login failed");

        // Return failure status
        return { success: false };
      }
    } catch (error) {
      toast.error(
        <div className="flex flex-col justify-center items-center px-4">
          <p className="font-semibold">Login Failed</p>
          <p>Internal Server Error!</p>
        </div>
      );
      console.error("Error:", error);

      // Return failure status
      return { success: false };
    }
  }

  function getRoles() {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      return [];
    }
    const payload = jwtToken.split(".")[1];
    const decodedPayload = atob(payload);
    const rolesArray = JSON.parse(decodedPayload).role;

    let roles = [];

    for (let i = 0; i < rolesArray.length; i++) {
      roles.push(rolesArray[i].authority);
    }
    // console.log(JSON.parse(decodedPayload));
    // console.log(rolesArray[0].authority);
    // console.log(roles);
    return roles;
  }

  function getToken() {
    return localStorage.getItem("jwtToken");
  }

  const [name, setName] = useState("");
  
  useEffect(() => {
    getUsername();
  }, []);

  console.log("Navbar: ", name);

  async function getUsername() {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      if (!jwtToken) {
        throw new Error("No token found");
      }

      const payload = jwtToken.split(".")[1];
      const decodedPayload = atob(payload); // atob() is a built-in function to decode a string from base-64
      const email = JSON.parse(decodedPayload).sub;

      // console.log(email);

      const response = await fetch(
        `http://localhost:8080/api/v1/users/email/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'text/plain',
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      

      if (response.ok) {
        const data = await response.text(); // Parse the JSON data from the response
        console.log("Username fetched successfully");
        setName(data);
        console.log(data);
        
        return data;
      } else {
        console.error("Username fetch failed");
        return "";
      }
    } catch (error) {
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
      value={{
        number,
        isAuthenticated,
        login,
        access,
        printAccess,
        logout,
        getRoles,
        getToken,
        name,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
