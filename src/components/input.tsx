import React from 'react';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const config = props;
  const className = `form-control ${config.className ?? ''}`;
  return <input className={className} {...config} />;
};

// Input.propTypes = {
//   props: React.InputHTMLAttributes<HTMLInputElement>,
// };

export default Input;
