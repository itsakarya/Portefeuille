import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { IExperienceItem } from '@/types/education';

const ExperienceItem = ({ data, index }: IExperienceItem) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the description by bullet points
  const descriptionPoints = data.description
    .split('•')
    .filter((point) => point.trim() !== '');

  // Show only the first bullet point initially
  const firstPoint = descriptionPoints[0]
    ? `• ${descriptionPoints[0].trim()}`
    : '';

  return (
    <motion.div
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
              src={data.logo}
              alt={data.company}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div>
            <div className="flex items-center mb-2">
              <Briefcase className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-sm font-semibold text-gray-600">
                {data.year}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {data.title}
            </h3>
            <h4 className="text-lg text-gray-600 mb-2">{data.company}</h4>
          </div>
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            key={isExpanded ? 'expanded' : 'collapsed'}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Show only the first bullet point initially with line clamp */}
            <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-2'}`}>
              {firstPoint}
            </p>

            {/* Show the rest of the bullet points when expanded */}
            {isExpanded &&
              descriptionPoints.slice(1).map((point, idx) => (
                <p key={idx} className="text-gray-600">
                  • {point.trim()}
                </p>
              ))}
          </motion.div>
        </AnimatePresence>
        <Button
          variant="primary"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center p-0 text-purple-600 hover:text-purple-700 transition-colors duration-200"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;
