import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

import './Login.less';
import { Alert } from 'antd';

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const SocialLoginBox = () => (
    <div className="social-container">
      <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
    </div>
  );
  const [styleS, setStyle] = useState(true);
  
  const displayCodeDiv = () => {
    setStyle(false)
  };  
  const hideCodeDiv = () => {
    setStyle(true)
    setRightPanelActive(false);
  };

  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const [value, setValue] = useState<string>("")

  return (
    <div className="login-container">
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          { styleS ? (
          <Form action="#">
            <h1>Create Account</h1>
            <SocialLoginBox />
            {/* <span>or use your email for registration</span> */}
            <PhoneInput className='phoneInput'
                                        international
                                        defaultCountry="UA"
                                        limitMaxLength={true}
                                        value={value}
                                        onChange={(string) => setValue}/>
            <button className="submit-button" onClick={displayCodeDiv}>Send code</button>
          </Form>
          ) : (
          <Form action="#">
            <h1>Enter code</h1>
            <SocialLoginBox />
            {/* <span>or use your email for registration</span> */}
            <Input className="input-code" type="phone" placeholder="####"  maxLength={4}/>
            <button className="submit-button">Submit</button>
          </Form>
          )}
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <SocialLoginBox />
            {/* <span>or use your account</span> */}
            <PhoneInput className='phoneInput'
                                        international
                                        defaultCountry="UA"
                                        limitMaxLength={true}
                                        value={value}
                                        onChange={(string) => setValue}/>
            <Input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='h1_overlay'>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={hideCodeDiv}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='h1_overlay'>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={() => setRightPanelActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;