import React, { useEffect, useState } from 'react';
import {
  AboutBGSrcIcon,
  TestimonialAuthorSrcIcon,
  VladPhotoSrcIcon,
  BogdanPhotoSrcIcon,
  DmytroPhotoSrcIcon,
  RomanPhotoSrcIcon,
} from '../../components/ImgLoader';
import Quote_BG from '../../static/img/about/quote_bg.jpg';

const About = () => {
  const teamContent = [
    {
      photo: VladPhotoSrcIcon,
      name: 'Vladyslav Moiseienko',
      role: 'Front-end developer',
    },
    {
      photo: BogdanPhotoSrcIcon,
      name: 'Bogdan Drushkevych',
      role: 'Front-end developer',
    },
    {
      photo: DmytroPhotoSrcIcon,
      name: 'Dmytro Pavliv',
      role: 'Back-end developer',
    },
    {
      photo: RomanPhotoSrcIcon,
      name: 'Roman Kindrat',
      role: 'Back-end developer',
    },
  ];

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
                <p>
                  Contextual advertising programs sometimes have
                  strict policies that need to be adhered too.
                  Let’s take Google as an example.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="about__item">
                <h4>Who We Do ?</h4>
                <p>
                  In this digital generation where information can
                  be easily obtained within seconds, business
                  cards still have retained their importance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="about__item">
                <h4>Why Choose Us</h4>
                <p>
                  A two or three storey house is the ideal way to
                  maximise the piece of earth on which our home
                  sits, but for older or infirm people.
                </p>
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
                <span className="icon_quotations" />
                <p>
                  “Talent wins games, but teamwork and
                  intelligence wins championships.”
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
              <div className="testimonial__pic set-bg" style={{ backgroundImage: `url(${Quote_BG})` }} />
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
            { teamContent.map((item) => (
              <div key={item.name} className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <item.photo />
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Team Section End --> */}
    </>
  );
};

export default About;
