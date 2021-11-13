export const transitions = {
  easings: {
    in: [0.55, 0.085, 0.68, 0.53] /* easeInQuad */,
    out: [0.25, 0.46, 0.45, 0.94] /* easeOutQuad */,
    inOut: [0.42, 0, 0.58, 1],
  },
};

const transitionIn = {
  duration: 1.2,
  ease: [0.32, 0.02, 0.02, 0.99],
};

const transitionOut = {
  duration: 0.3,
  delay: 0,
  ease: transitions.easings.in,
};

export const variantsBase = {
  initialFade: {
    transition: transitionOut,
  },
  initialSlide: {
    transition: transitionOut,
  },

  fadeOut: {
    transition: {
      ...transitionOut,
    },
  },
  slideOut: {
    transition: {
      ...transitionOut,
    },
  },
  fadeIn: {
    transition: {
      ...transitionIn,
    },
  },
  slideIn: {
    transition: {
      ...transitionIn,
    },
  },
};

export const staggerChildrenContainerVariants = {
  ...variantsBase,
  initialFade: {
    ...variantsBase.initialFade,
  },
  initialSlide: {
    ...variantsBase.initialSlide,
  },
  fadeOut: {
    ...variantsBase.fadeOut,
    transition: {
      ...variantsBase.fadeOut.transition,
      delayChildren: 0,
      staggerChildren: 0.06,
    },
  },
  slideOut: {
    ...variantsBase.slideOut,
    transition: {
      ...variantsBase.slideOut.transition,
      delayChildren: 0,
      staggerChildren: 0.06,
    },
  },
  fadeIn: {
    ...variantsBase.fadeIn,
    transition: {
      ...variantsBase.fadeIn.transition,
      delayChildren: 0.01,
      staggerChildren: 0.08,
    },
  },
  slideIn: {
    ...variantsBase.slideIn,
    transition: {
      ...variantsBase.slideIn.transition,
      delayChildren: 0,
      staggerChildren: 0.08,
    },
  },
};

export const childrenVariants = {
  initialFade: {
    opacity: 0.01,
    transition: transitionOut,
  },
  initialSlide: {
    y: 50,
    transition: transitionOut,
  },
  fadeOut: {
    opacity: 0,
    transition: {
      ...transitionOut,
      duration: 0.2,
    },
  },
  slideOut: {
    y: -40,
    transition: {
      ...transitionOut,
      duration: 0.3,
    },
  },
  fadeIn: {
    opacity: 1,
    transition: {
      ...transitionIn,
      duration: 0.6,
    },
  },
  slideIn: {
    y: 0,
    transition: {
      ...transitionIn,
      duration: 0.7,
    },
  },
};
