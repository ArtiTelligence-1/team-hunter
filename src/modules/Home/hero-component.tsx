import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero1SrcIcon, Hero2SrcIcon } from '../../components/ImgLoader';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';


const Hero = () => {
  // const importAll = async (require: __WebpackModuleApi.RequireContext): Promise<string[]> =>
  //   await Promise.all(require.keys().map((value) => require(`${value}`)));

  // const [heroes, setHeroes] = useState<string[]>();

  // useEffect(() => {
  //   importAll(require.context('../../static/img/hero', false, /\.(png|jpe?g|svg)$/, 'lazy'))
  //     .then((e) => setHeroes(e))
  //     .catch(() => {});
  // }, []);
  const swiperContent = [
    {
      photo: Hero1SrcIcon,
      title: "Together, we can do so much!",
      descritpion: "Find your team and enjoy time spent with them"
    },
    {
      photo: Hero2SrcIcon,
      title: "Age is not a barrier",
      descritpion: "No matter how old you are everything is in your hands"
    }
  ]

  return(
      <Swiper
        className="hero__slider"
        modules={[Navigation, Autoplay, Pagination]}
        // navigation
        autoplay
        loop
        pagination={{ clickable: true }}
      >
        { swiperContent.map((item) => (
          <SwiperSlide key={item.photo}>
            <div
              className="hero__items set-bg active"
              style={{ backgroundImage: `url(${item.photo})` }}
              data-setbg={item.photo}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text">
                      <h2>{item.title}</h2>
                      <p>{item.descritpion}</p>
                      <Link to="/Events" className="primary-btn">
                        Find event
                        <span className="arrow_right" />
                      </Link>
                      {/* <div className="hero__social">
                        <Link to="."><i className="fa fa-facebook" /></Link>
                        <Link to="."><i className="fa fa-twitter" /></Link>
                        <Link to="."><i className="fa fa-pinterest" /></Link>
                        <Link to="."><i className="fa fa-instagram" /></Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      );
};

export default Hero;
