import { useEffect, useRef, useState } from 'react';
import { Image as DatoImage } from 'react-datocms';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { useWindowScroll, useWindowSize } from 'react-use';
import { childrenVariants } from '../../../constants';
export interface HeroModuleProps {
  scrollDownAsset: { url: string };
  scrollDownText: string;
  moduleDomId: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  marginTop: boolean;
  marginBottom: boolean;
  ctaUrl: string;
  media: DatoResponsiveImageType;
  ctaTrackerEvent: any;
  layout: string;
}
const HeroModule: React.FC<HeroModuleProps> = ({
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
  scrollDownAsset,
  scrollDownText,
}) => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  // const parallaxY = useSpring(0, { damping: 20, stiffness: 120 });
  const parallaxY = useMotionValue(0);
  const { height } = useWindowSize();
  const { y } = useWindowScroll();
  const [playingVideo, setPlayingVideo] = useState(false);

  useEffect(() => {
    if (heroImageRef.current) {
      const heroImageRect = heroImageRef.current.getBoundingClientRect();
      const distanceFromCenter =
        heroImageRect.top + heroImageRect.height * 0.5 - height * 0.5;
      parallaxY.set(Math.min(distanceFromCenter, 0) * 0.22);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  if (media?.responsiveImage && !media?.responsiveImage.alt) {
    media.responsiveImage.alt = headline;
  }

  const onPlayVideo = () => {
    setPlayingVideo(true);
  };

  const onCloseVideo = () => {
    setPlayingVideo(false);
  };

  return (
    <div id={moduleDomId} className='grid gap-8 grid-cols-1 md:grid-cols-12'>
      <motion.h1
        className='md:col-start-1 md:col-span-5 text-5xl font-extrabold  dark:text-gray-300'
        variants={childrenVariants}
      >
        {headline}
      </motion.h1>
      <motion.div
        className='md:row-start-2 md:col-start-1 md:col-span-5'
        variants={childrenVariants}
      >
        {subtext && (
          <motion.p
            className='text-3xl font-bold text-gray-400 '
            variants={childrenVariants}
          >
            {subtext}
          </motion.p>
        )}
      </motion.div>
      {ctaLabel && ctaUrl && (
        <motion.div
          className='md:col-start-1 md:row-start-3 md:col-span-5 '
          variants={childrenVariants}
        >
          <motion.div className=''>
            <motion.a className='' href={ctaUrl}>
              {ctaLabel}
            </motion.a>
          </motion.div>
          <div className=''>
            <motion.div className=''>
              {scrollDownAsset && (
                <motion.img
                  className=''
                  alt='scroll-down'
                  src={scrollDownAsset.url}
                />
              )}
              <motion.p className='' variants={childrenVariants}>
                {scrollDownText}
              </motion.p>
              <motion.div
                animate={{ y: -20 }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className=''
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
      <motion.div
        className='md:col-start-6 md:col-span-7 md:row-start-1 md:row-span-2'
        variants={childrenVariants}
        ref={heroImageRef}
      >
        {media?.responsiveImage ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <DatoImage data={media.responsiveImage} />
        ) : (
          <Image
            objectFit='cover'
            layout='fill'
            alt={headline}
            src={media.url}
          />
        )}
      </motion.div>
    </div>
  );
};

export default HeroModule;
