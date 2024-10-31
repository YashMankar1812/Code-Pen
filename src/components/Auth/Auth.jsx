import React, { useState } from 'react';
import { FaGoogle, FaCodepen } from 'react-icons/fa';
import '../Auth/Auth.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Slider from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Editor from '../Editor/Editor';

import { auth, provider, signInWithPopup } from '../../firebase';



const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      setIsAuthenticated(true);

      // userDatapost();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    console.log(isLogin);
  };

 
  
  return (
<div>
  <Header />
  {isAuthenticated ? (
    <div className='row'>
      {/* <div className='slider-cont'> */}
        {/* <Slider/> */}
      {/* </div> */}
      <div className='editor-cont'>
        {/* <Dashboard/> */}
        {/* <Editor/> */}
        </div>
      </div>
        ) :(
          <main>
          <div className="auth">
          <div className="auth-container animate__animated animate__zoomIn">
            <div className="auth-logo">
              <FaCodepen className="codepen-icon" />
              <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            </div>
            <form onSubmit={submitHandler}  >
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {!isLogin && <input type="password" placeholder="Confirm Password" required />}
              <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>

            <button className="google-btn" onClick={handleGoogleSignIn}>
              <FaGoogle />
            </button>
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <span onClick={handleToggle} className="toggle-link">
                {isLogin ? ' Signup' : ' Login'}
              </span>
            </p>
          </div>
        </div>
    </main>
        )}
  <Footer/>
      </div>
  );
};

export default Auth;
