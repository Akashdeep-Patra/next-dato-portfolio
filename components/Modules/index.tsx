import { motion, usePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { useIntersection } from 'use-intersection';
import { staggerChildrenContainerVariants } from '../../constants';
export interface ModuleContainerProps {
  id: string;
  children: React.ReactNode;
  moduleName: string;
  accentColor: { hex: string };
  killTransitionIn: boolean;
  debug: boolean;
  marginBottom: boolean;
  marginTop: boolean;
}
const ModuleContainer: React.FC<ModuleContainerProps> = ({
  id,
  children,
  debug,
  moduleName,
  accentColor,
  killTransitionIn,
  marginBottom,
  marginTop,
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
  const { theme } = useTheme();

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
  const containerStyle: any = {
    light:{ backgroundColor: accentColor?.hex},
    dark:{}
  };
  

  return (
    <section
      id={id}
      style={containerStyle[theme as string]}
      className={`mx-5 md:mx-20 rounded-lg p-5  ${
        marginBottom ? 'mb-20' : 'mb-5'
      } ${marginTop ? 'mt-20' : 'mb-5'}`}
    >
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
