import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const spinerIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

const LoadingSpinner: React.FC = () => (
  <div className="w-100 flex mb-6">
    <Spin className="m-auto" indicator={spinerIcon} />
  </div>
);

export default LoadingSpinner;
