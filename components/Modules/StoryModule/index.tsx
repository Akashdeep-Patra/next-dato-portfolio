import { Image as DatoImage } from 'react-datocms';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { childrenVariants } from '../../../constants';
import Button from '../../Button';
export interface StoryModuleProps {
  moduleDomId: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  marginTop: boolean;
  marginBottom: boolean;
  ctaUrl: string;
  ctaTrackerEvent: any;
  layout: string;
  media: DatoResponsiveImageType;
}
const StoryModule: React.FC<StoryModuleProps> = ({
  moduleDomId,
  headline,
  subtext,
  ctaLabel,
  ctaUrl,
  layout,
  media,
  marginTop,
  marginBottom,
  ctaTrackerEvent,
}) => {
  return (
    <motion.div
      id={moduleDomId}
      className={`grid gap-5 grid-cols-2 md:grid-cols-3`}
      style={{}}
      variants={childrenVariants}
    >
      <motion.div
        className={`col-start-1 col-span-2`}
        variants={childrenVariants}
      >
        <DatoImage data={media.responsiveImage} />
      </motion.div>
      <div className='content grid grid-template-cols-1 gap-5 col-span-2 md:col-start-3 md:col-span-1'>
        <motion.h1
          className={`text-4xl font-bold dark:text-gray-200`}
          variants={childrenVariants}
        >
          {headline}
        </motion.h1>
        {subtext && (
          <motion.p
            className={`text-md text-gray-500 dark:text-gray-300 self-center`}
            variants={childrenVariants}
          >
            {subtext}
          </motion.p>
        )}
        {ctaLabel && ctaUrl && (
          <motion.div className={`flex flex-row`} variants={childrenVariants}>
            <Button href={ctaUrl}>
              {ctaLabel}
              <IoIosArrowForward size={40} />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default StoryModule;
