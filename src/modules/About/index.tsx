import React, { useEffect, useState } from 'react'
import { AboutBGSrcIcon, TestimonialAuthorSrcIcon } from '../../components/ImgLoader';

const About = () => {

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>About Us</h4>
                        <div className="breadcrumb__links">
                            <a href="../modules/Home">Home</a>
                            <span>About Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- About Section Begin --> */}
    <section className="about spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="about__pic">
                        <AboutBGSrcIcon />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Who We Are ?</h4>
                        <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                        Let’s take Google as an example.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Who We Do ?</h4>
                        <p>In this digital generation where information can be easily obtained within seconds, business
                        cards still have retained their importance.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Why Choose Us</h4>
                        <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                        sits, but for older or infirm people.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End --> */}

    {/* <!-- Testimonial Section Begin --> */}
    <section className="testimonial">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="testimonial__text">
                        <span className="icon_quotations"></span>
                        <p>“Talent wins games, but teamwork and intelligence wins championships.”
                        </p>
                        <div className="testimonial__author">
                            <div className="testimonial__author__pic">
                                <TestimonialAuthorSrcIcon />
                            </div>
                            <div className="testimonial__author__text">
                                <h5>Michael Jordan</h5>
                                <p>Basketball player</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="testimonial__pic set-bg" data-setbg="img/about/quote_bg.jpg"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Testimonial Section End --> */}

    {/* <!-- Team Section Begin --> */}
    <section className="team spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Our Team</span>
                        <h2>Meet Our Team</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        {/* <img src="img/about/team-11.jpg" alt=""> */}
                        <h4>Vladyslav Moiseienko</h4>
                        <span>Front-end developer</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        {/* <img src="img/about/team-22.jpg" alt=""> */}
                        <h4>Bogdan Drushkevych</h4>
                        <span>Front-end developer</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        {/* <img src="img/about/team-33.jpg" alt=""> */}
                        <h4>Roman Kindrat</h4>
                        <span>Back-end developer</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                        {/* <img src="img/about/team-44.jpg" alt=""> */}
                        <h4>Dmytro Pavliv</h4>
                        <span>Back-end developer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Team Section End --> */}
    </>
  );
}

export default About;
