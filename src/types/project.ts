export interface IProjects {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export interface IProjectModalProps {
  project: IProjects;
  onClose: () => void;
}
