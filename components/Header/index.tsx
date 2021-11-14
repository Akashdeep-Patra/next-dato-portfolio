import React from 'react';
import { motion } from 'framer-motion';
import { HeaderIcon } from '../../Shared/SvgComponents';
import { ImSun } from 'react-icons/im';
import { useTheme } from 'next-themes';
import { MdNightsStay } from 'react-icons/md';
export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { theme, setTheme } = useTheme();
  const variants = {
    light: {
      scale: [1, 1.9, 1.9, 1],
      rotate: [0, 70, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
    dark: {
      rotate: [0, 10, 0],
      scale: [1, 1.5, 1.5, 1],
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
        transition={{ type: 'spring', stiffness: 100 }}
        aria-label='Toggle Dark Mode'
        type='button'
        className='p-5 text-center flex flex-col justify-center rounded-[6px] dark:text-white text-black '
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' && <ImSun size={40} className='' />}
        {theme === 'dark' && <MdNightsStay size={40} className='' />}
      </motion.button>
    </motion.div>
  );
};

export default Header;
