import React, { useEffect, useState } from 'react'
import { BannerSrcIcon, CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from '../../components/ImgLoader';

import test from "../../static/img/product/product-1.jpg";

const Home = () => {
  const importAll = async (r: __WebpackModuleApi.RequireContext): Promise<string[]> => {
    let files: string[] = [];
    await r.keys().map(async (value) => files.push(await r(value)));
    return files;
  };
  
  const [heroes, setHeroes] = useState<string[]>([]);

  useEffect(() => {
    if(heroes.length === 0)
    importAll(require.context('../../static/img/hero', false, /\.(png|jpe?g|svg)$/, 'lazy')).then( e =>
      setHeroes(e)
    );
    console.log(heroes)
  }, [heroes]);



  return (
    <>
      {/* <!-- Hero Section Begin --> */}
    <section className="hero">
      <div className="hero__slider owl-carousel">
        { heroes.map(item => (
          <div className="hero__items set-bg" data-setbg={item}>
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                    commitment to exceptional quality.</p>
                    <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                    <div className="hero__social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="hero__items set-bg" data-setbg="/static/media/hero-1.c081bcff664751bf4f02.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                            <h6>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                            commitment to exceptional quality.</p>
                            <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                            <div className="hero__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    {/* <!-- Hero Section End --> */}

    {/* <!-- Banner Section Begin --> */}
    <section className="banner spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-4">
            <div className="banner__item">
              <div className="banner__item__pic">
                <BannerSrcIcon />
              </div>
              <div className="banner__item__text">
                <h2>Clothing Collections 2030</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Banner Section End --> */}

    {/* <!-- Product Section Begin --> */}
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active" data-filter="*">Best Sellers</li>
              <li data-filter=".new-arrivals">New Arrivals</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
    {/* <!-- Product Section End --> */}
    </>
  );
}

export default Home;