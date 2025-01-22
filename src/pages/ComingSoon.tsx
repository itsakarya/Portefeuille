import { motion } from 'framer-motion';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ComingSoon = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900'
            : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
        }`}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/30'
            : 'bg-gradient-to-tr from-blue-500/30 via-transparent to-pink-500/30'
        } animate-gradient`}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block mb-8"
          >
            <Construction className="w-24 h-24 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Coming Soon
          </h1>
          
          <p className="text-xl mb-12 text-white/90">
            We're working hard to bring you something amazing. Stay tuned!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>

          {/* Decorative circles */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;