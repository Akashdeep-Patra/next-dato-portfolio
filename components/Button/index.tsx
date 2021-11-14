import { motion } from 'framer-motion';
import React from 'react';
import { childrenVariants } from '../../constants';

export interface ButtonProps {
  children?: React.ReactNode;
  type?: 'primary' | 'secondary';
  href?: string;
  target?: '__self' | '_blank';
}
const Button: React.FC<ButtonProps> = ({
  href,
  children,
  target,
  type = 'primary',
}) => {
  const Wrapper = href ? 'a' : 'button';
  return (
    <Wrapper
      style={{}}
      target={target}
      className={`flex flex-row items-center justify-between transform
       px-5 py-3 rounded-xl active:scale-105 hover:shadow-lg hover:cursor-pointer transition-all hover:scale-110 duration-300   ${
         type === 'primary' ? 'bg-indigo-600 text-gray-50' : ''
       }`}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
