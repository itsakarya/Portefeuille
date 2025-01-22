import { ExternalLink, Github } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { IProjectModalProps } from '../../types/project';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const ProjectModal = ({ project, onClose }: IProjectModalProps) => {

  const navigate = useNavigate()
  const handleLinkClick = (link : string) => {
    console.log(link)
      if(!link.length){
        navigate('/coming-soon')
        return 
      }
      window.open(link,'_blank')
  }

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="z-50  bg-black/50 p-0">
        <div className=" bg-white rounded-xl max-w-4xl w-full">
          {/* Image and Close Button */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />

          {/* Modal Body */}
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 mb-4 whitespace-pre-line">
                {project.longDescription}
              </DialogDescription>
            </DialogHeader>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              <Button
              variant='ghost'
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => handleLinkClick(project.github)}
              >
                <Github className="h-5 w-5 mr-1" />
                View Code
              </Button>
              <Button
              variant='ghost'
                onClick={() => handleLinkClick(project.live)}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ExternalLink className="h-5 w-5 mr-1" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
