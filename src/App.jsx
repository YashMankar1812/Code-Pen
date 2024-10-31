// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Auth from "./components/Auth/Auth";
import Sidebar from "./components/Sidebar/Sidebar"
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import StarredPage from "./components/StarredPage/StarredPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Loading from "./components/Loading/Loading";
import Editor from "./components/Editor/Editor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AuthProvider>
      <Router>
       <Header />
       <div style={{display: "flex",
       backgroundColor: "#222" }}>
        <Sidebar /> 
        <Routes>
              <Route path="/" element={<Auth/>} />  
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/about" element={<About />} />
              <Route path="starred" element={<StarredPage />} /> 
              <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={
              <ProtectedRoute>
                <Editor />
                <Dashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
       </div>
<Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
