import { motion } from 'framer-motion';
import { INTRO_DATA } from '../constants.ts/about-data';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative flex justify-center"
            variants={itemVariants}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-[3px] rounded-full bg-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover object-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              {INTRO_DATA.HEADING}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="text-gray-600 space-y-4"
            >
              <p>{INTRO_DATA.CONTENT.PARA_1}</p>
              <p>{INTRO_DATA.CONTENT.PARA_2}</p>
              <p>{INTRO_DATA.CONTENT.PARA_3}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
