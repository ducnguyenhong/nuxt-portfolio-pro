interface Skill {
  name: string;
  icon: string;
  type: string[];
  iconAlt?: string;
}

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: '/images/HTML.webp',
    type: ['WEBSITE'],
    iconAlt: 'HTML - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'CSS',
    icon: '/images/CSS.webp',
    type: ['WEBSITE'],
    iconAlt: 'CSS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Javascript',
    icon: '/images/Javascript.webp',
    type: ['WEBSITE'],
    iconAlt: 'Javascript - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Typescript',
    icon: '/images/Typescript.webp',
    type: ['WEBSITE'],
    iconAlt: 'Typescript - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'React',
    icon: '/images/React.webp',
    type: ['WEBSITE'],
    iconAlt: 'React - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Angular',
    icon: '/images/Angular.webp',
    type: ['WEBSITE'],
    iconAlt: 'Angular - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'React Native',
    icon: '/images/ReactNative.webp',
    type: ['MOBILE_DESKTOP'],
    iconAlt: 'Angular - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Vue',
    icon: '/images/Vue.webp',
    type: ['WEBSITE'],
    iconAlt: 'Vue - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NextJS',
    icon: '/images/NextJS.webp',
    type: ['WEBSITE'],
    iconAlt: 'NextJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NuxtJS',
    icon: '/images/NuxtJS.webp',
    type: ['WEBSITE'],
    iconAlt: 'NuxtJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'ElectronJS',
    icon: '/images/ElectronJS.webp',
    type: ['MOBILE_DESKTOP'],
    iconAlt: 'ElectronJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NodeJS',
    icon: '/images/NodeJS.webp',
    type: ['BACKEND'],
    iconAlt: 'NodeJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'ExpressJS',
    icon: '/images/ExpressJS.webp',
    type: ['BACKEND'],
    iconAlt: 'ExpressJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NestJS',
    icon: '/images/NestJS.webp',
    type: ['BACKEND'],
    iconAlt: 'NestJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'MongoDB',
    icon: '/images/MongoDB.webp',
    type: ['BACKEND'],
    iconAlt: 'MongoDB - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Nginx',
    icon: '/images/Nginx.webp',
    type: ['DEPLOY'],
    iconAlt: 'Nginx - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'PM2',
    icon: '/images/PM2.webp',
    type: ['DEPLOY'],
    iconAlt: 'PM2 - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Vercel',
    icon: '/images/Vercel.webp',
    type: ['DEPLOY'],
    iconAlt: 'Vercel - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Railway',
    icon: '/images/Railway.webp',
    type: ['DEPLOY'],
    iconAlt: 'Railway - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Koyeb',
    icon: '/images/Koyeb.webp',
    type: ['DEPLOY'],
    iconAlt: 'Koyeb - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Github',
    icon: '/images/Github.webp',
    type: ['OTHER'],
    iconAlt: 'Github - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Gitlab',
    icon: '/images/Gitlab.webp',
    type: ['OTHER'],
    iconAlt: 'Gitlab - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Figma',
    icon: '/images/Figma.webp',
    type: ['OTHER'],
    iconAlt: 'Figma - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Photoshop',
    icon: '/images/Photoshop.webp',
    type: ['OTHER'],
    iconAlt: 'Photoshop - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Jira',
    icon: '/images/Jira.webp',
    type: ['OTHER'],
    iconAlt: 'Jira - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Agile Scrum',
    icon: '/images/AgileScrum.webp',
    type: ['OTHER'],
    iconAlt: 'Agile Scrum - Nguyễn Hồng Đức Portfolio'
  }
];

export interface Project {
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
  technologies: string[];
  type: 'Company' | 'Personal' | 'Freelance';
  device: ('WEB' | 'MOBILE' | 'DESKTOP')[];
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Stockbook',
    description: 'Social network about stocks',
    demo: 'https://stockbook.vn',
    thumbnail: '/images/StockbookBanner.webp',
    logo: '/images/Stockbook.webp',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Company',
    device: ['WEB', 'MOBILE']
  },
  {
    name: 'KMS',
    description: 'Knowledge management system for stocks',
    thumbnail: '/images/KMSBanner.webp',
    logo: '/images/KMS.webp',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Company',
    device: ['WEB']
  },
  {
    name: 'Homefood',
    description: 'System for buying and selling health foods',
    demo: 'https://homefood.com.vn',
    thumbnail: '/images/HomefoodBanner.webp',
    logo: '/images/Homefood.webp',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Company',
    device: ['WEB', 'MOBILE']
  },
  {
    name: 'Stormik',
    description: 'Safe and private web browser',
    demo: 'https://stormik.org',
    thumbnail: '/images/StormikBanner.webp',
    logo: '/images/Stormik.webp',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Personal',
    device: ['WEB', 'MOBILE', 'DESKTOP']
  },
  {
    name: '84.GO',
    description: 'Online bus ticket booking system',
    thumbnail: '/images/84GOBanner.webp',
    logo: '/images/84GO.webp',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Freelance',
    device: ['WEB', 'MOBILE']
  },
  {
    name: 'Homefood2',
    logo: '/images/84GO.webp',
    description: 'Homefood',
    demo: 'https://homefood.com.vn',
    thumbnail: 'https://mms.img.susercontent.com/aefee07e2521fb8ced6656deb2ee1818',
    technologies: ['ReactJS', 'ReactNative'],
    type: 'Company',
    device: ['WEB']
  }
];

interface Timeline {
  workplace: string;
  duration: string;
  description: string;
  workplaceLogo: string;
  technologies: string[];
  workplaceLink: string;
}

export const TIMELINES: Timeline[] = [
  {
    workplace: 'FPT Software',
    duration: '10/2024 - Now',
    description: 'Participate in developing telecommunications outsourcing projects.',
    workplaceLogo: '/images/FPTSoftware.webp',
    workplaceLink: 'https://fptsoftware.com',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Vndirect Securities Corporation',
    duration: '01/2022 - 09/2024',
    description: 'Participate in developing support projects for securities users.',
    workplaceLogo: '/images/Vndirect.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://www.vndirect.com.vn'
  },
  {
    workplace: 'Egroup',
    duration: '06/2020 - 12/2021',
    description: 'Participate in developing an online English teaching website system.',
    workplaceLogo: '/images/Egroup.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://egroup.vn'
  },
  {
    workplace: 'University of Transport and Communications',
    duration: '09/2017 - 06/2021',
    description: 'Studied and graduated in 2021 (IT Engineer).',
    workplaceLogo: '/images/UTC.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://www.utc.edu.vn'
  }
];

interface Faq {
  label: string;
  content: string;
}

export const FAQS: Faq[] = [
  {
    label: 'How to contact me?',
    content:
      'At the top of the website, I have provided information about my Facebook and LinkedIn, and you can connect with me through those platforms. You can also connect with me on Zalo at the phone number 0389755202.'
  },
  {
    label: 'See all of projects',
    content:
      'In the header of the website, you can find the "Projects" section. Click on that to view all of my projects. If you want more details, you can click on a specific project.'
  },
  {
    label: 'CV PDF',
    content: 'In the header of the website, click on the "Info" section and you can see it.'
  },
  {
    label: 'Use this portfolio template',
    content:
      'Sure, I have made the source code public. You can view it here: https://github.com/ducnguyenhong/nuxt-portfolio-pro'
  },
  {
    label: 'Become a Sponsor',
    content:
      'I would be very happy about that! Please contact me using the information provided at the top of the website.'
  }
];

interface Sponsor {
  name: string;
  logo: string;
  link: string;
  height?: string;
}

export const SPONSOR_LIST: Sponsor[] = [
  {
    name: 'Stormik',
    logo: '/images/Stormik.webp',
    link: 'https://stormik.org',
    height: 'h-8'
  },
  {
    name: 'Vercel',
    logo: '/images/Vercel.webp',
    link: 'https://vercel.com'
  },
  {
    name: 'Github',
    logo: '/images/Github.webp',
    link: 'https://github.com'
  }
];
