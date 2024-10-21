import type { Technology } from './technology.type';

export type ProjectPlatform = 'WEBSITE' | 'MOBILE' | 'DESKTOP';

export type ProjectType = 'Company' | 'Personal' | 'Freelance';

export interface Project {
  id: string;
  name: string;
  description: string;
  content: string;
  thumbnail: string;
  logo: string;
  technologies: Technology[];
  type: ProjectType;
  platform: ProjectPlatform[];
  demo?: string;
  demoImages?: string[];
  isTop?: boolean;
}
