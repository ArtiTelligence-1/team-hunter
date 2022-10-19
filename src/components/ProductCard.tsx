import React from 'react';
import { CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from './ImgLoader';

const ProductCard = () => {
  const label = '';

  return (
    <>
      <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${false ? 'hot-sales' : 'new-arrivals'}`}>
      <div className="product__item {is sale : 'sale' : ''}">
        <div className="product__item__pic set-bg" data-setbg="">
        {label && <span className="label">{label}</span> }
        <ul className="product__hover">
          <li><a href="#"><HeartSrcIcon /></a></li>
          <li><a href="#"><CompareSrcIcon /><span>Compare</span></a></li>
          <li><a href="#"><SearchSrcIcon /></a></li>
        </ul>
        </div>
        <div className="product__item__text">
        <h6>Piqué Biker Jacket</h6>
        <a href="#" className="add-cart">+ Add To Cart</a>
        <div className="rating">
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <h5>$67.24</h5>
        <div className="product__color__select">
          <label htmlFor="pc-1">
          <input type="radio" id="pc-1" />
          </label>
          <label className="active black" htmlFor="pc-2">
          <input type="radio" id="pc-2" />
          </label>
          <label className="grey" htmlFor="pc-3">
          <input type="radio" id="pc-3" />
          </label>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductCard;