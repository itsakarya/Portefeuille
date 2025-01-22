import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IEducationItemProps } from '@/types/education';

const EducationItem = ({ data }: IEducationItemProps) => {
  return (
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
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex shrink-0">
            <motion.img
              src={data.LOGO}
              alt={data.INSTITUTION}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GraduationCap className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-gray-600">
                {data.YEAR}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {data.DEGREE}
            </h3>
            <h4 className="text-lg text-gray-600 mb-2">{data.INSTITUTION}</h4>
          </div>
        </div>
        <p className="text-gray-600 mb-2">{data.DESCRIPTION}</p>
      </motion.div>
    </motion.div>
  );
};

export default EducationItem;
