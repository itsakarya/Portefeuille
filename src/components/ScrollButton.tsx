import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const arrowVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 10,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse' as const, // Explicitly typed
        duration: 1.5,
      },
    },
  };

  const lineVariants = {
    initial: { height: 0 },
    animate: {
      height: isAtBottom ? 0 : 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-8 right-8 flex flex-col items-center gap-2 cursor-pointer z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClick}
      >
        <motion.div
          className={`w-0.5 ${isDark ? 'bg-white/30' : 'bg-gray-800/30'}`}
          variants={lineVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className={`relative ${isDark ? 'text-white' : 'text-gray-800'}`}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          {isAtBottom ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`transform rotate-180 ${isDark ? 'stroke-white' : 'stroke-gray-800'}`}
            >
              <path
                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={isDark ? 'stroke-white' : 'stroke-gray-800'}
            >
              <path
                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollButton;
