import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartSrcIcon } from '../../components/ImgLoader';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList';
import BackgroundImage from '../../static/img/product/product-13.jpg';

const Events = () => (
  <>
    {/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__text">
              <h4>Events</h4>
              <div className="breadcrumb__links">
                <Link to="/">Home</Link>
                <span>Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Shop Section Begin --> */}
    <section className="shop spad">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3">
            <div className="shop__sidebar">
              <div className="shop__sidebar__search">
                <form action=".">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <span className="icon_search" />
                  </button>
                </form>
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <Link to=".">Sport</Link>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__categories">
                          <ul className="nice-scroll">
                            <li>
                              <Link to=".">Football</Link>
                            </li>
                            <li>
                              <Link to=".">Volleyball</Link>
                            </li>
                            <li>
                              <Link to=".">Basketball</Link>
                            </li>
                            <li>
                              <Link to=".">Tennis</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link to=".">Place</Link>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li>
                              <Link to=".">Arena Lviv</Link>
                            </li>
                            <li>
                              <Link to=".">Pidvalna Stad</Link>
                            </li>
                            <li>
                              <Link to=".">Ukraine Stadium</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link to=".">Size</Link>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label htmlFor="xs">
                            xs
                            <input name="size" type="radio" id="xs" />
                          </label>
                          <label htmlFor="sm">
                            s
                            <input name="size" type="radio" id="sm" />
                          </label>
                          <label htmlFor="md">
                            m
                            <input name="size" type="radio" id="md" />
                          </label>
                          <label htmlFor="xl">
                            xl
                            <input name="size" type="radio" id="xl" />
                          </label>
                          <label htmlFor="2xl">
                            2xl
                            <input name="size" type="radio" id="2xl" />
                          </label>
                          <label htmlFor="xxl">
                            xxl
                            <input name="size" type="radio" id="xxl" />
                          </label>
                          <label htmlFor="3xl">
                            3xl
                            <input name="size" type="radio" id="3xl" />
                          </label>
                          <label htmlFor="4xl">
                            4xl
                            <input name="size" type="radio" id="4xl" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-12">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__left">
                    <Link to="/AddEvent" className="site-btn">Add Event</Link>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__right">
                    <p>Sort by Price:</p>
                    <select>
                      <option value="">Low To High</option>
                      <option value="">$0 - $55</option>
                      <option value="">$55 - $100</option>
                    </select>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="row w-fit">
                            <ProductCard />
                    </div> */}
            <ProductList />
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Shop Section End --> */}
  </>
);

export default Events;
