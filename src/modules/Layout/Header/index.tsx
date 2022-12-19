import React, { useEffect, useState } from 'react';

import '../../../styles/sass/_variable.scss';
import '../../../styles/sass/_header.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { LogoSrcIcon } from '../../../components/ImgLoader';
import { structureMap } from '../../../routing/siteMapping';

const Header = () => {
  const [authorization, setAuthorization] = useState(localStorage.access_token);

  useEffect(() => { localStorage.access_token = authorization; }, [authorization]);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <Link to="/">
                <LogoSrcIcon />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                {
                  structureMap('header').map(({ key, component, isActive }) => (
                    <li key={key} className={isActive ? 'active' : ''}>{component}</li>
                  ))
                }
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option header__menu">
              {!authorization ?
                  (<Link to="/login/signin" className="link">Login</Link>) :
                  (<div className="link b-0" onKeyDown={() => {}} onClick={() => setAuthorization(undefined)}>Log Out</div> // eslint-disable-line jsx-a11y/no-static-element-interactions
                  )}
              <Link to="." className="search-switch"><img src="/img/icon/search.png" alt="" /></Link>
              <Link to="."><img src="/img/icon/heart.png" alt="" /></Link>
              <Link to="."><img src="/img/icon/chat.png" alt="" /></Link>
              {/* <!-- <div className="price">$0.00</div> --> */}
            </div>
          </div>
        </div>
        <div className="canvas__open"><i className="fa fa-bars" /></div>
      </div>
    </header>
  );
};
export default Header;
