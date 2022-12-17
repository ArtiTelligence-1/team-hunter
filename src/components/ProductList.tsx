import { List } from 'antd';
import React from 'react';
import { useGetEventQuery, useLazyGetEventQuery } from '../core/api/events';
import ProductCard from './ProductCard';

const ProductList = () => {
  let events = useGetEventQuery(null);
  setInterval(() => console.log(events), 2000);
  console.log(events);
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        column: 4,
      }}
      dataSource={[
        1, 2, 3, 4, 5,
      ]}
      renderItem={(item: number) => (
        <ProductCard />
      )}
    />
  );
};
export default ProductList;
