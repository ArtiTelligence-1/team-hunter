import React from 'react';
import { ReactComponent as LogoSrcTag } from '../static/img/logo.svg';
// import LogoSrcTag from '../static/img/logo.svg';
import BannerSrc from '../static/img/banner/banner-1.jpg';
import HeartSrc from '../static/img/icon/heart.png';
import CompareSrc from '../static/img/icon/compare.png';
import SearchSrc from '../static/img/icon/search.png';

import AboutBGSrc from '../static/img/about/aboutus_bg.jpg';
import TestimonialAuthorSrc from '../static/img/about/testimonial-author.jpg';

export const LogoSrcIcon = (props?: any) => <LogoSrcTag height="2em" {...props} />
export const BannerSrcIcon = (props?: any) => <img src={BannerSrc} {...props} />;
export const HeartSrcIcon = (props?: any) => <img src={HeartSrc} {...props} />;
export const CompareSrcIcon = (props?: any) => <img src={CompareSrc} {...props} />;
export const SearchSrcIcon = (props?: any) => <img src={SearchSrc} {...props} />;
{ /* About Us */ }
export const AboutBGSrcIcon = (props?: any) => <img src={AboutBGSrc} {...props} />;
export const TestimonialAuthorSrcIcon = (props?: any) => <img src={TestimonialAuthorSrc} {...props} />;
