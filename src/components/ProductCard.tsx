import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import { CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from './ImgLoader';
import img from '../static/img/product/product-1.jpg';
import { Event } from '../core/types/event';

interface ProductCardProps {
  event: Event
  isSale?: boolean
}

const ProductCard = (props: ProductCardProps) => {
  const { isSale, event } = props;

  return (
  // <div className={`mix mx-auto ${false ? 'hot-sales' : 'new-arrivals'}`}>
    <div className={`product__item mx-auto p-2 ${isSale ? 'sale' : ''}`} style={{ width: 'fit-content' }}>
      <div
        className="product__item__pic set-bg"
        style={{ backgroundImage: `url(${event.posterUrl})` }}
      >
        {event.title !== '' ? <span className="label">{event.type}</span> : ''}
        <ul className="product__hover">
          <li><Link to={`/Event/${event.id}`}><HeartSrcIcon /></Link></li>
          {/* <li><Link to="."><CompareSrcIcon /><spanCompare</span></Link></li> */}
          {/* <li><Link to="."><SearchSrcIcon /></Link></li> */}
        </ul>
      </div>
      <div className="product__item__text">
        <h6 className="h-product">{event.title}</h6>
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-0">
              {event.location.label}
            </p>
            <p>
              {moment(event.holdingTime).format('HH:mm DD/MM/YYYY')}
            </p>
          </div>
          <div className="flex items-center">
            {event.participants.length}
            /
            {event.participantsLimit}
          </div>
        </div>
        <Link to={`/Event/${event.id}`} className="add-cart">+ Details</Link>
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
  );
};

ProductCard.defaultProps = {
  isSale: false,
};

export default ProductCard;
