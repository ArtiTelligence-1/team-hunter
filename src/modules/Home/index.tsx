import { List, Row, Space } from 'antd';
// import Row from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BannerSrcIcon, ProdSaleSrcIcon } from '../../components/ImgLoader';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList';
import { useGetEventQuery } from '../../core/api/events';

import Hero from './hero-component';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'December, 10, 2022';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="layout-body">
      <section className="hero">
        <Hero />
      </section>
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <BannerSrcIcon />
                </div>
                <div className="banner__item__text">
                  <h2>Find an event for yourself</h2>
                  <Link to="/Events">Events</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2>
                  Football
                  <br />
                  <span>
                    Basketball
                  </span>
                  <br />
                  Tennis
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <ProdSaleSrcIcon />
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="categories__deal__countdown">
                <span>Event Of The Week</span>
                <h2>Lviv Basketball Competition</h2>
                <div className="categories__deal__countdown__timer">
                  <div className="cd-item">
                    <span>{days}</span>
                    <p>Days</p>
                  </div>
                  <div className="cd-item">
                    <span>{hours}</span>
                    <p>Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>{minutes}</span>
                    <p>Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>{seconds}</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <Link to="/" className="primary-btn">Join now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
