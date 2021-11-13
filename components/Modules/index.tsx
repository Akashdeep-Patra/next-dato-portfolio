import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { useIntersection } from 'use-intersection';
import { node, bool, string } from 'prop-types';
import { motion, usePresence } from 'framer-motion';
import { staggerChildrenContainerVariants } from '../../constants';
export interface ModuleContainerProps {
  id: string;
  children: React.ReactNode;
  moduleName: string;
  accentColor: string;
  killTransitionIn: boolean;
  debug: boolean;
}
const ModuleContainer: React.FC<ModuleContainerProps> = ({
  id,
  children,
  debug,
  moduleName,
  accentColor,
  killTransitionIn,
}) => {
  const [isPresent, safeToRemove] = usePresence();
  const { height } = useWindowSize();
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(intersectionRef, {
    root: undefined,
    rootMargin: `-${Math.min(height * 0.2, 100)}px`,
    threshold: 0,
    once: true,
  });

  const [isInView, setIsInView] = useState(intersecting);
  useEffect(() => {
    // It may be above
    if (
      !intersecting &&
      isPresent &&
      intersectionRef?.current?.getBoundingClientRect().y
    ) {
      if (intersectionRef?.current?.getBoundingClientRect().y < 0) {
        setIsInView(true);
      }
    }
    if (intersecting && isPresent) {
      setIsInView(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersecting, isPresent]);

  useEffect(() => {
    if (!isPresent) safeToRemove?.call(this);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  const hidden = killTransitionIn ? false : ['initialFade', 'initialSlide'];
  const animateIn = ['fadeIn', 'slideIn'];
  return (
    <section id={id} className='m-5 md:m-20'>
      <motion.div
        key={`${moduleName}-${isInView}`}
        ref={intersectionRef}
        initial={hidden}
        animate={isInView ? animateIn : hidden}
        variants={staggerChildrenContainerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ModuleContainer;
