import React from 'react';
import { CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from './ImgLoader';

const ProductCard = () => {

  return (
    <>
    <div className="row product__filter">
      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
      <div className="product__item">
        <div className="product__item__pic set-bg" data-setbg={test}>
        <span className="label">New</span>
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
          <i className="fa fa-star-o"></i>
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
      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
      <div className="product__item sale">
        <div className="product__item__pic set-bg" data-setbg={require("../../static/img/product/product-6.jpg")}>
        <span className="label">Sale</span>
        <ul className="product__hover">
          <li><a href="#"><HeartSrcIcon /></a></li>
          <li><a href="#"><CompareSrcIcon /><span>Compare</span></a></li>
          <li><a href="#"><SearchSrcIcon /></a></li>
        </ul>
        </div>
        <div className="product__item__text">
        <h6>Ankle Boots</h6>
        <a href="#" className="add-cart">+ Add To Cart</a>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <h5>$98.49</h5>
        <div className="product__color__select">
          <label htmlFor="pc-16">
          <input type="radio" id="pc-16" />
          </label>
          <label className="active black" htmlFor="pc-17">
          <input type="radio" id="pc-17" />
          </label>
          <label className="grey" htmlFor="pc-18">
          <input type="radio" id="pc-18" />
          </label>
        </div>
        </div>
      </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
      <div className="product__item">
        <div className="product__item__pic set-bg" data-setbg={require("../../static/img/product/product-7.jpg")}>
        <ul className="product__hover">
          <li><a href="#"><HeartSrcIcon /></a></li>
          <li><a href="#"><CompareSrcIcon /><span>Compare</span></a></li>
          <li><a href="#"><SearchSrcIcon /></a></li>
        </ul>
        </div>
        <div className="product__item__text">
        <h6>T-shirt Contrast Pocket</h6>
        <a href="#" className="add-cart">+ Add To Cart</a>
        <div className="rating">
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <h5>$49.66</h5>
        <div className="product__color__select">
          <label htmlFor="pc-19">
          <input type="radio" id="pc-19" />
          </label>
          <label className="active black" htmlFor="pc-20">
          <input type="radio" id="pc-20" />
          </label>
          <label className="grey" htmlFor="pc-21">
          <input type="radio" id="pc-21" />
          </label>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;