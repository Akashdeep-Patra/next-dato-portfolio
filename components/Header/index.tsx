import React from 'react';
import { motion } from 'framer-motion';
import { HeaderIcon } from '../../Shared/SvgComponents';
import { useTheme } from 'next-themes';

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div className='flex items-center	 flex-row m-5 justify-between min-w-max'>
      <HeaderIcon className='max-w-[100px] max-h-[100px] bg-indigo-400 p-4 rounded-[50px]' />
      <motion.button
        aria-label='Toggle Dark Mode'
        type='button'
        className='p-5 text-center flex flex-col justify-center bg-green-800 rounded-[6px] text-white  dark:bg-green-400 h-5'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Toggle
      </motion.button>
    </motion.div>
  );
};

export default Header;
