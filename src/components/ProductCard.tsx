import React from 'react'
import { Link } from 'react-router-dom'
import { CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from './ImgLoader';

import img from '../static/img/product/product-1.jpg';

const ProductCard = () => {
  const label = ''
  const is_sale = false

  return (
  // {/* <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${false ? 'hot-sales' : 'new-arrivals'}`}> */}
  // <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix mx-auto ${false ? 'hot-sales' : 'new-arrivals'}`}>
    <div className={`product__item mx-auto p-2 ${is_sale ? 'sale' : ''}`} style={{ width: 'fit-content' }}>
      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${img})` }}>
        {label && <span className="label">{label}</span> }
        <ul className="product__hover">
          <li><Link to="."><HeartSrcIcon /></Link></li>
          {/* <li><Link to="."><CompareSrcIcon /><spanCompare</span></Link></li> */}
          {/* <li><Link to="."><SearchSrcIcon /></Link></li> */}
        </ul>
      </div>
      <div className="product__item__text">
        <h6 className="h-product">Basketball</h6>
        <h6 className="d-flex justify-content-between">
          <p>On Pidvalna 16:00</p>
          <p>2 / 4</p>
        </h6>
        <Link to="." className="add-cart">+ Details</Link>
        {/* <div className="rating">
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </div> */}
        {/* <h5>$67.24</h5> */}
        {/* <div className="product__color__select">
            <label htmlFor="pc-1">
            <input type="radio" id="pc-1" />
            </label>
            <label className="active black" htmlFor="pc-2">
            <input type="radio" id="pc-2" />
            </label>
            <label className="grey" htmlFor="pc-3">
            <input type="radio" id="pc-3" />
            </label>
          </div> */}
      </div>
    </div>
  // </div>
  )
}

export default ProductCard
