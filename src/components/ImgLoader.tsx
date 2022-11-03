import React from 'react';
import LogoSrcTag from '../static/img/logo.svg';
// import LogoSrcTag from '../static/img/logo.svg';
import BannerSrc from '../static/img/banner/banner-1.jpg';
import HeartSrc from '../static/img/icon/heart.png';
import CompareSrc from '../static/img/icon/compare.png';
import SearchSrc from '../static/img/icon/search.png';

import AboutBGSrc from '../static/img/about/aboutus_bg.jpg';
import TestimonialAuthorSrc from '../static/img/about/testimonial-author.jpg';

export const LogoSrcIcon = (props?: any) => <LogoSrcTag height="2em" {...props} />;
export const BannerSrcIcon = (props?: any) => <img src={BannerSrc} alt="Banner" {...props} />;
export const HeartSrcIcon = (props?: any) => <img src={HeartSrc} alt="Heart" {...props} />;
export const CompareSrcIcon = (props?: any) => <img src={CompareSrc} alt="Compare" {...props} />;
export const SearchSrcIcon = (props?: any) => <img src={SearchSrc} alt="Search" {...props} />;
export const AboutBGSrcIcon = (props?: any) => <img src={AboutBGSrc} alt="AboutBG" {...props} />;
export const TestimonialAuthorSrcIcon = (props?: any) => <img src={TestimonialAuthorSrc} alt="TestimonialAuthor" {...props} />;
