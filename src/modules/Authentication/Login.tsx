import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
// @ts-expect-error this is js module
import TelegramLoginButton from 'react-telegram-login';

import './Login.less';
import { Alert } from 'antd';
import { Link } from 'react-router-dom';
import { useTelegramOauthMutation } from '../../core/api/user';
import { telegramOauth } from '../../core/types/telegramOauth';

const SocialLoginBox = () => (
  <div className="social-container">
    <Link to="." className="social"><FontAwesomeIcon icon={faFacebook} /></Link>
    <Link to="." className="social"><FontAwesomeIcon icon={faGoogle} /></Link>
    <Link to="." className="social"><FontAwesomeIcon icon={faTelegram} /></Link>
  </div>
);

const mockData = {
  id: 1895656874,
  first_name: 'Abiel',
  last_name: 'Slaver',
  username: 'mainmisleader',
  photo_url: 'https://t.me/i/userpic/320/3BpBAEnWxu8uYSQU9PuoBsItN8ZqSfhQR8dHjumTA90.jpg',
  auth_date: 1671379503,
  hash: 'c59fcd2a94263b1a7bc600e719f7d6ecb9bec0e1e9195ad501a4b8fff95fc6d8',
};

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [authorizeTelegram] = useTelegramOauthMutation();

  const handleSubmit = (oauthData: telegramOauth) => {
    console.log(oauthData);
    authorizeTelegram(oauthData)
      .then((e) => console.log(e))
      .catch(() => {});
  };

  return (
    <div className="login-container">
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-in-container">
          <form action=".">
            <h1>Sign in</h1>
            {/* <SocialLoginBox /> */}
            <div className="mt-4">
              <TelegramLoginButton dataOnauth={handleSubmit} botName="experiment_testing_bot" />
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: '<iframe id="telegram-login-experiment_testing_bot" src="https://oauth.telegram.org/embed/experiment_testing_bot?origin=https%3A%2F%2F6be5-185-17-127-253.ngrok.io&amp;return_to=https%3A%2F%2F6be5-185-17-127-253.ngrok.io%2Flogin%2Fsignin&amp;size=medium&amp;request_access=write" scrolling="no" style="overflow: hidden; border: medium none; height: 28px; width: 185px;" width="186" height="28" frameborder="0"></iframe>' }} /> */}
            {/* <script src="https://telegram.org/js/telegram-widget.js?21" data-telegram-login="experiment_testing_bot" data-size="medium" data-userpic="false" data-onauth="(user) => alert(user)" data-request-access="write" /> */}
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
  );
};

export default Login;
