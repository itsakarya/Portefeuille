import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, RefreshCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  let errorMessage = 'An unexpected error occurred';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-red-900 via-gray-900 to-purple-900'
            : 'bg-gradient-to-br from-red-500 via-gray-500 to-purple-500'
        }`}
      />

      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-tr from-red-900/30 via-transparent to-purple-900/30'
            : 'bg-gradient-to-tr from-red-500/30 via-transparent to-purple-500/30'
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
              repeatType: 'reverse',
            }}
            className="inline-block mb-8"
          >
            <AlertTriangle className="w-24 h-24 text-white" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Something Went Wrong
          </h1>

          <p className="text-xl mb-8 text-white/90">{errorMessage}</p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors duration-300"
            >
              <RefreshCcw className="w-5 h-5" />
              Try Again
            </motion.button>
          </div>

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

export default ErrorBoundary;
