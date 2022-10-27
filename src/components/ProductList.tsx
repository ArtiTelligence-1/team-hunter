import { List } from 'antd';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {

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
        1,2,3,4,5
      ]}
      renderItem={(item: number) => (
        <ProductCard />
      )}
      />
  );
};

export default ProductList;