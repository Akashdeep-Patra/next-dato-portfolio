import React from 'react';
import { motion } from 'framer-motion';
import { HeaderIcon } from '../../Shared/SvgComponents';
import { ImSun } from 'react-icons/im';
import { useTheme } from 'next-themes';
import { BsMoonStars } from 'react-icons/bs';
export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { theme, setTheme } = useTheme();
  const variants = {
    light: {
      scale: [1, 1.9, 1],
      rotate: [0, 70, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
    dark: {
      scale: [1, 1.9, 1],
      rotate: [0, 160, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
  };

  return (
    <motion.div className='flex items-center	 flex-row m-5 md:mx-20 justify-between min-w-max'>
      <HeaderIcon
        fillColorHex={'#3D2C8D'}
        className='max-w-[100px] max-h-[100px] pl-0 p-4 '
      />
      <motion.button
        animate={theme}
        variants={variants}
        aria-label='Toggle Dark Mode'
        type='button'
        className='p-5 text-center flex flex-col justify-center rounded-[6px] dark:text-white text-black '
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' && <ImSun size={40} className='' />}
        {theme === 'dark' && <BsMoonStars size={40} className='' />}
      </motion.button>
    </motion.div>
  );
};

export default Header;
