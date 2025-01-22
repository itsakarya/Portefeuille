import { motion } from 'framer-motion';
import { EDUCATION_DATA, EXP_DATA } from '@/constants.ts/experience-data';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

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
          <EducationItem data={EDUCATION_DATA} />
        </div>

        {/* Work Experience Section */}
        <div className="max-w-3xl mx-auto">
          {EXP_DATA.map((exp, index) => (
            <ExperienceItem key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
