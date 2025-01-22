import {
  Blocks,
  FileJson,
  FileType2,
  Frame,
  Globe,
  Layout,
  Lock,
  PawPrint,
  Puzzle,
  Search,
  Shield,
  Zap,
} from 'lucide-react';

const skills = [
  { name: 'React.js', icon: Blocks, color: 'text-blue-500' },
  { name: 'Next.js', icon: Frame, color: 'text-black' },
  { name: 'Next-Auth', icon: Lock, color: 'text-green-600' },
  { name: 'JavaScript', icon: FileJson, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: FileType2, color: 'text-blue-600' },
  { name: 'ZOD', icon: Shield, color: 'text-purple-600' },
  { name: 'HTML', icon: Layout, color: 'text-orange-500' },
  { name: 'CSS', icon: Globe, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: Zap, color: 'text-cyan-500' },
  { name: 'shadCn', icon: Puzzle, color: 'text-gray-800' },
  { name: 'TanStack Query', icon: Search, color: 'text-red-500' },
  { name: 'Zustand', icon: PawPrint, color: 'text-black' },
];

export default skills;
