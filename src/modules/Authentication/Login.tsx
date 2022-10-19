import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

import './Login.less';

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const SocialLoginBox = () => (
    <div className="social-container">
      <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
      <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
    </div>
  );

  return (
    <div className="login-container">
      <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <SocialLoginBox />
            <span>or use your email for registration</span>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <SocialLoginBox />
            <span>or use your account</span>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <Button>Sign In</Button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <Button className="ghost" id="signIn">Sign In</Button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button className="ghost" id="signUp">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;