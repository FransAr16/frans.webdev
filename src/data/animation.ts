export const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };
  export const revealsText = {
    initial: {
      y: "100%",
    },
    open: {
      y: "0%",
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
    closed: {
      y: "100%",
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
  };
  export const fadeIn = {
    initial: {
      y: "100",
      opacity: 0,
    },
    open: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
    closed: {
      y: "100%",
      opacity: 0,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
  };
  
  export const progress = {
    open: {
      width: "100%",
      transition: { duration: .5, ease: [0.76, 0, 0.24, 1] },
    },
  
    closed: {
      width: "0%",
      transition: { duration: .5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  
  export const navbarSlideUp = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        delay: 2.8,
      },
    },
  };
  
  export const sidebarSlideUp = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  
  export const underLineBtn = {
    initial: { width: "0%", y: 100 },
    animate: {
      y: 0,
      width: "100%",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 100,
      width: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  