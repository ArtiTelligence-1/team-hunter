import { List } from 'antd';
import React from 'react';
import { useGetEventQuery, useLazyGetEventQuery } from '../core/api/events';
import { Event } from '../core/types/event';
import LoadingSpinner from './LoadingSpinner';
import ProductCard from './ProductCard';

const ProductList = () => {
  const events = useGetEventQuery(null);

  return events.isFetching ?
    <LoadingSpinner /> :
      (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            column: 4,
          }}
          dataSource={events.data! as any}
          renderItem={(item: Event) => (
            <ProductCard
              event={item}
            />
          )}
        />
      );
};
export default ProductList;
