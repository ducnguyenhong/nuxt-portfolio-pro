import type { Project } from '~/types/project.type';

export const PROJECT_LIST: Project[] = [
  {
    id: 'stockbook',
    name: 'Stockbook',
    description: 'Social network about stocks',
    thumbnail: '/images/projects/stockbook/banner.webp',
    logo: '/images/projects/stockbook/logo.webp',
    technologies: ['React', 'React Native'],
    type: 'Company',
    platform: ['WEBSITE', 'MOBILE'],
    demo: 'https://stockbook.vn',
    isTop: true,
    demoImages: [
      '/images/projects/stockbook/banner.webp',
      '/images/projects/stockbook/demo-1.webp',
      '/images/projects/stockbook/demo-2.webp'
    ],
    content: `<div><strong>Project name:</strong></div><div>Stockbook stock market social network</div><div><strong><br></strong></div><div><strong>Description:</strong></div><div>Stockbook is a social networking platform specifically designed for stock market investors to connect, share insights, and exchange their perspectives on the market.<br></div><div><br></div><div><strong>Technologies:</strong></div><div>- Website: ReactJS, Recoil, React Query, ChakraUI</div><div>- Mobile app: React Native, Recoil, React Query</div><div><br></div><div><strong>Responsibilities:</strong></div><div>- Set up the project's codebase, develop main functions of the project (Key member)</div><div>- Build client website, admin website</div><div>- Develop and deploy mobile app to Google Play and App Store</div><div><br></div><div><strong>Project demo link:</strong></div><div>- Website:<a href="https://stockbook.vn" target="_blank"><span style="color: rgb(153, 0, 133)">&nbsp;</span><span style="color: rgb(102, 0, 255)">Here</span></a><br>- Google Play:&nbsp;<a target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vndirect.cudau"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div><div>- App Store:&nbsp;<a target="_blank" href="https://apps.apple.com/vn/app/stockbook/id1221215976"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div>`
  },
  {
    id: 'kms',
    name: 'KMS',
    description: 'Knowledge management system for stocks',
    thumbnail: '/images/projects/kms/banner.webp',
    logo: '/images/projects/kms/logo.webp',
    technologies: ['React', 'NextJS', 'Typescript'],
    type: 'Company',
    platform: ['WEBSITE'],
    isTop: true,
    demoImages: [],
    content: `<div><strong>Project name:</strong></div>
    <div>VNDIRECT Knowledge Management System</div>

    <div><strong><br></strong></div>

    <div><strong>Description:</strong></div>
    <div>Knowledge Management System (KMS) is VNDIRECT's internal knowledge management system. Here, users can access a comprehensive repository of knowledge related to the securities industry, which is the company's core business.<br></div>

    <div><br></div>

    <div><strong>Technologies:</strong></div>
    <div>- Website: ReactJS, NextJS, Typescript, Recoil, React Query, ChakraUI, Antd Design</div>
    
    <div><br></div>
    
    <div><strong>Responsibilities:</strong></div><div>- Set up the project's codebase, develop main functions of the project (Key member)</div><div>- Build client website, admin website</div><div>- Lead a team of 4 members</div>
    
    <div><br></div>

    <div><strong>Project demo link:</strong></div>
    <div>This is an internal project</div>`
  },
  {
    id: 'homefood',
    name: 'Homefood',
    description: 'System for buying and selling health foods',
    thumbnail: '/images/projects/homefood/banner.webp',
    logo: '/images/projects/homefood/logo.webp',
    technologies: ['React', 'NextJS', 'React Native'],
    type: 'Company',
    platform: ['WEBSITE', 'MOBILE'],
    isTop: true,
    demoImages: [
      '/images/projects/homefood/banner.webp',
      '/images/projects/homefood/demo-1.webp',
      '/images/projects/homefood/demo-2.webp'
    ],
    content: `<div><strong>Project name:</strong></div>
    <div>Homefood health food store</div>

    <div><strong><br></strong></div>

    <div><strong>Description:</strong></div>
    <div>Homefood is a premium macrobiotic grocery store chain dedicated to providing families with wholesome, high-quality food products that promote overall well-being.<br></div>

    <div><br></div>

    <div><strong>Technologies:</strong></div>
    <div>- Website: ReactJS, NextJS, Chakra UI, Recoil, React Query</div>
    <div>- Sale mobile app: React Native, Recoil, React Query</div>
    
    <div><br></div>
    
    <div><strong>Responsibilities:</strong></div><div>- Develop functions of the project</div><div>- Build client website, admin website, sale mobile app</div><div>- Lead a team of 3 members (mobile app)</div>
    
    <div><br></div>

    <div><strong>Project demo link:</strong></div>
    <div>- Website:<a href="https://homefood.com.vn" target="_blank"><span style="color: rgb(153, 0, 133)">&nbsp;</span><span style="color: rgb(102, 0, 255)">Here</span></a>
    <br>- Google Play:&nbsp;<a target="_blank" href="https://play.google.com/store/apps/details?id=com.homefoodsaleapp"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div>
    <div>- App Store:&nbsp;<a target="_blank" href="https://play.google.com/store/apps/details?id=com.homefoodsaleapp"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div>`
  },
  {
    id: 'stormik',
    name: 'Stormik',
    description: 'Cross-platform web browser',
    thumbnail: '/images/projects/stormik/banner.webp',
    logo: '/images/projects/stormik/logo.webp',
    technologies: ['React', 'NextJS', 'React Native', 'ElectronJS', 'Typescript'],
    type: 'Personal',
    platform: ['WEBSITE', 'MOBILE', 'DESKTOP'],
    isTop: true,
    demoImages: [
      '/images/projects/stormik/banner.webp',
      '/images/projects/stormik/demo-1.webp',
      '/images/projects/stormik/demo-2.webp'
    ],
    content: `<div><strong>Project name:</strong></div>
    <div>Stormik browser</div>

    <div><strong><br></strong></div>

    <div><strong>Description:</strong></div>
    <div>Stormik is a cross-platform web browser. It can run on websites, desktop apps, mobile apps.<br></div>

    <div><br></div>

    <div><strong>Technologies:</strong></div>
    <div>- Search engine: ReactJS, NextJS, Recoil, Typescript, Google Custom Search API</div>
    <div>- Mobile app: React Native, Recoil, Typescript</div>
    <div>- Desktop app: ElectronJS, Typescript</div>
    
    <div><br></div>
    
    <div><strong>Responsibilities:</strong></div><div>- Founder</div>
    
    <div><br></div>

    <div><strong>Project demo link:</strong></div>
    <div>- Website:<a href="https://stormik.org" target="_blank"><span style="color: rgb(153, 0, 133)">&nbsp;</span><span style="color: rgb(102, 0, 255)">Here</span></a>
    <br>- Mobile app:&nbsp;<a target="_blank" href="https://stormik.org/stormik-mobile"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div>
    <div>- Search engine:&nbsp;<a target="_blank" href="https://stormik.org/search"><span style="color: rgb(102, 0, 255)">Here</span></a>​</div>`
  }
];
