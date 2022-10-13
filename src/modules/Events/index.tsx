import React, { useEffect, useState } from 'react'
import { HeartSrcIcon } from '../../components/ImgLoader';
import BackgroundImage from '../../static/img/product/product-8.jpg';

const Events = () => {


    
  return (
    <>
    
{/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Shop</h4>
                        <div className="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>Shop</span>
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
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Sport</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll">
                                                    <li><a href="#">Football</a></li>
                                                    <li><a href="#">Volleyball</a></li>
                                                    <li><a href="#">Basketball</a></li>
                                                    <li><a href="#">Tennis</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Place</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><a href="#">Arena Lviv</a></li>
                                                    <li><a href="#">Pidvalna Stad</a></li>
                                                    <li><a href="#">Ukraine Stadium</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label>xs
                                                    <input type="radio" id="xs"/>
                                                </label>
                                                <label>s
                                                    <input type="radio" id="sm"/>
                                                </label>
                                                <label>m
                                                    <input type="radio" id="md"/>
                                                </label>
                                                <label>xl
                                                    <input type="radio" id="xl"/>
                                                </label>
                                                <label>2xl
                                                    <input type="radio" id="2xl"/>
                                                </label>
                                                <label>xxl
                                                    <input type="radio" id="xxl"/>
                                                </label>
                                                <label>3xl
                                                    <input type="radio" id="3xl"/>
                                                </label>
                                                <label>4xl
                                                    <input type="radio" id="4xl"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="shop__product__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                        <option value="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style ={ { backgroundImage: `url(${BackgroundImage})` } }>
                                    <ul className="product__hover">
                                        <HeartSrcIcon />
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Basketball</h6>
                                    <h6>On Pidvalna 16:00</h6>
                                    <a href="shop-details.html" className="add-cart">+ Add To Cart</a>
                                    <h5>2 / 4</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-4"/>
                                        </label>
                                        <label className="active black">
                                            <input type="radio" id="pc-5"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-6"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Section End --> */}
    </>
  );
}

export default Events;
