import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../../constants.ts/projects-data';
import ProjectModal from './ProjectModal';
import { IProjects } from '../../types/project';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<IProjects | null>(null);

  const onSelectProject = useCallback(
    (data: IProjects | null = null) => {
      setSelectedProject(data);
    },
    [setSelectedProject]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className={cn('py-20', isDark ? 'bg-gray-800' : 'bg-white')}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'text-4xl font-bold mb-12 text-center',
            isDark ? 'text-white' : 'text-gray-800'
          )}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={cn(
                'rounded-lg shadow-lg overflow-hidden cursor-pointer',
                isDark ? 'bg-gray-900' : 'bg-white'
              )}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="text-white text-center p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-semibold">View Details</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="p-6">
                <h3
                  className={cn(
                    'text-xl font-bold mb-2',
                    isDark ? 'text-white' : 'text-gray-800'
                  )}
                >
                  {project.title}
                </h3>
                <p
                  className={cn(
                    'mb-4',
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  )}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={cn(
                        'px-3 py-1 rounded-full text-sm',
                        isDark
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      )}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* More Projects Card */}
          <motion.div
            className={cn(
              'rounded-lg shadow-lg overflow-hidden cursor-pointer flex items-center justify-center',
              isDark ? 'bg-gray-900' : 'bg-white'
            )}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            onClick={() => navigate('/coming-soon')}
          >
            <div className="p-8 text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                <ArrowRight
                  className={cn(
                    'w-12 h-12 mx-auto',
                    isDark ? 'text-white' : 'text-gray-800'
                  )}
                />
              </motion.div>
              <h3
                className={cn(
                  'text-xl font-bold',
                  isDark ? 'text-white' : 'text-gray-800'
                )}
              >
                More Projects
              </h3>
              <p
                className={cn(
                  'mt-2',
                  isDark ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                Discover our upcoming projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={onSelectProject} />
      )}
    </section>
  );
};

export default Projects;
