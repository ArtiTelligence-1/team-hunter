import React from 'react';
import Icons from '../../assets/icons/icons.svg'; // Path to your icons.svg

const Icon = ({ name, color, size }: { name: string, color: string, size: number }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
)

export default Icon
