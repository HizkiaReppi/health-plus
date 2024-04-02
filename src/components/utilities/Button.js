import React from 'react';

const Button = ({ outline = false, className, children, ...props }) => {
  return (
    <button
      className={`${
        outline
          ? 'bg-transparent border border-primary-500 hover:border-primar-600 text-black hover:text-primary-500'
          : 'bg-primary-500 hover:bg-primary-600 text-white'
      } duration-200 ease-in-out py-2 px-5 rounded-md text-base ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
