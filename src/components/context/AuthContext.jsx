import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

// Create the context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const auth = getAuth(); // Initialize auth without app
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Sign-In
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setUser(userData);
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(userData));
      userDatapost(userData);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  // Sign out
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check user authentication state on load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, [auth]);
  

  const userDatapost = (userData) =>{
    // fetched using axios   
    axios.post('https://code-pen-e771b-default-rtdb.asia-southeast1.firebasedatabase.app//userdata.json', {
      // email: email,
      // password: password
      userData
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }
  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider> // Add the missing semicolon here
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext();
};