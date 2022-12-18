import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const spinerIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const LoadingSpinner: React.FC = () => <Spin indicator={spinerIcon} />;

export default LoadingSpinner;
