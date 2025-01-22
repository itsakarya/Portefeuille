import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/constants.ts/navbar-data';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <nav
      className={cn('fixed w-full z-50 transition-all duration-300', {
        'bg-white/80 backdrop-blur-sm shadow-sm': isScrolled,
        'bg-transparent': !isScrolled,
      })}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1
            className={cn('text-2xl font-bold transition-colors', {
              'text-gray-800': isScrolled,
              'text-white': !isScrolled,
            })}
          >
            {NAV_ITEMS.LOGO}
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.OPTIONS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn('transition-colors', {
                  'text-gray-600 hover:text-gray-900': isScrolled,
                  'text-white/80 hover:text-white': !isScrolled,
                })}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1rBqgnJJxQj8Y6tWLXeLkqLBtz9tmhQLd/view?usp=sharing',
                  '_blank'
                )
              }
              className={cn('flex items-center transition-colors gap-2', {
                'text-gray-600 hover:text-gray-900': isScrolled,
                'text-white/80 hover:text-white': !isScrolled,
              })}
            >
              Resume
              <Download className="mr-1" size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={cn('text-gray-600', { 'text-white': !isScrolled })}
              />
            ) : (
              <Menu
                className={cn('text-gray-600', { 'text-white': !isScrolled })}
              />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 md:hidden bg-gray-900/95 backdrop-blur-sm"
              >
                <motion.div
                  className="flex flex-col items-center justify-center h-full space-y-8 pt-16"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {NAV_ITEMS.OPTIONS.map((item, index) => (
                    <motion.a
                      key={item}
                      custom={index}
                      variants={menuItemVariants}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl transition-colors hover:text-gray-400 text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    custom={NAV_ITEMS.OPTIONS.length}
                    variants={menuItemVariants}
                    onClick={() => {
                      window.open(
                        'https://drive.google.com/file/d/1rBqgnJJxQj8Y6tWLXeLkqLBtz9tmhQLd/view?usp=sharing',
                        '_blank'
                      );
                      setIsOpen(false);
                    }}
                    className="text-2xl transition-colors flex gap-2 items-center text-white hover:text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Resume
                    <Download className="mr-2" size={24} />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
