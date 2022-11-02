import React, { useState } from 'react'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Form from 'antd/lib/form'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons'

import './Login.less'
import { Alert } from 'antd'
import { Link } from 'react-router-dom'

const SocialLoginBox = () => (
  <div className="social-container">
    <Link to="." className="social"><FontAwesomeIcon icon={faFacebook} /></Link>
    <Link to="." className="social"><FontAwesomeIcon icon={faGoogle} /></Link>
    <Link to="." className="social"><FontAwesomeIcon icon={faTelegram} /></Link>
  </div>
);

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false)

  return (
    <div className="login-container">
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-in-container">
          <form action=".">
            <h1>Sign in</h1>
            <SocialLoginBox />
            {/* <button>Sign In</button> */}
            <Link to=".">Choose a convenient method for you</Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="h1_overlay">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login
