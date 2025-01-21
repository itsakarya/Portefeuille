import { Github, Linkedin, Mail, Code2, Terminal, Cpu } from 'lucide-react';

const LOGO_WITH_LINK = [
  { icon: Github, href: 'https://github.com/itsakarya' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/aniket-kumar-arya-5b40131b7/',
  },
  { icon: Mail, href: 'mailto:aniket2018pr@gmail.com' },
];

const CODING_PLATFORM = [
  {
    icon: Code2,
    href: 'https://leetcode.com/u/itsakarya/',
    label: 'LeetCode',
    stats: '200+ Problems',
  },
  {
    icon: Terminal,
    href: 'https://www.codechef.com/users/itsakarya',
    label: 'CodeChef',
    stats: '3★ Coder',
  },
  {
    icon: Cpu,
    href: 'https://codeforces.com/profile/itsakarya',
    label: 'Codeforces',
    stats: 'newbie',
  },
];

export { LOGO_WITH_LINK, CODING_PLATFORM };
