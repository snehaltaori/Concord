import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

/* ------------------------ fonts ----------------------- */
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Calendar from "./pages/Calendar";
import Login from "./components/Login/Login";
import AuthProvider, { useAuth } from "./security/AuthContext";
import { getAuthorized } from "./helper/helper";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Signup from "./components/Signup/Signup";

function App() {
  const authContext = useAuth();
  function AuthenticatedRoute({ children }) {
    if (authContext.isAuthenticated) return children;
    else return <Navigate to="/login" />; // Redirect to login page if the user is not authenticated
  }

  // console.log(" world "+ authContext.isAuthenticated);
  // console.log(authContext.getRoles());  // TO GET THE ROLES

  

  return (
    <div className="App">
      {/* <AuthProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/dashboard"
              element={
                <AuthenticatedRoute>
                  <Dashboard />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthenticatedRoute>
                  <Profile />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
