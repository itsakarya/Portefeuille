import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, EXP_DATA } from '@/constants.ts/experience-data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
        >
          Experience & Education
        </motion.h2>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8"
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-px bg-gray-300"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <motion.img
                    src={EDUCATION_DATA.LOGO}
                    alt={EDUCATION_DATA.INSTITUTION}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-600">
                      {EDUCATION_DATA.YEAR}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {EDUCATION_DATA.DEGREE}
                  </h3>
                  <h4 className="text-lg text-gray-600 mb-2">
                    {EDUCATION_DATA.INSTITUTION}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{EDUCATION_DATA.DESCRIPTION}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <div className="max-w-3xl mx-auto">
          {EXP_DATA.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full w-px bg-gray-300"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />

              <motion.div
                className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-800 border-4 border-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: index * 0.2,
                }}
              />

              <motion.div
                className="bg-white rounded-lg shadow-md p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                    <motion.img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-600">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
