import { motion } from 'framer-motion';
import React from 'react';
import { childrenVariants } from '../../constants';

export interface ButtonProps {
  children?: React.ReactNode;
  type?: 'primary' | 'secondary';
  href?: string;
  target?: '_self' | '_blank';
  onClick?: any;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  href,
  children,
  target = '_self',
  type = 'primary',
  onClick,
  className,
}) => {
  const Wrapper = href ? 'a' : 'button';
  return (
    <Wrapper
      style={{}}
      href={href}
      target={target}
      onClick={onClick}
      className={`${className} flex flex-row items-center justify-between transform
      max-h-16
       px-5 py-3 rounded-xl active:scale-105 hover:shadow-lg hover:cursor-pointer transition-all hover:scale-110 duration-300   ${
         type === 'primary' ? 'bg-indigo-600 text-gray-50' : ''
       }`}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
