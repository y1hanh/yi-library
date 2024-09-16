import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.png';
// import porfolioImage2 from '../images/portfolio/portfolio-2.png';
// import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yihan Huang - Portfolio',
  description: "My Journey in Tech: Adventures of Yihan Huang",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yihan Huang.`,
  description: (
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a Melbourne Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently studying
        at <strong className="text-stone-100">Monash University</strong>.
    </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1yip_GCtsXyFd67im3ejoM32kEZy2fzvL/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Yihan Huang, a second-year Master of Information Technology student with a strong interest in software development and cloud computing. I'm passionate about problem-solving and continuously learning new skills to stay at the forefront of technology.`,
  aboutItems: [
    {label: 'Location', text: 'Melbourne, Victoria', Icon: MapIcon},
    {label: 'Interests', text: 'Squash, Bouldering, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Monash University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'Webpack',
        level: 5,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Tailwind',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {name: 'Cloud Computing', level: 6},
      {name: 'Docker', level: 5},
      {name: 'Kubernetes', level: 5},
      {name: 'AWS', level: 7},
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Kotlin',
        level: 6,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Skin MBTI',
    description: 'A web app that allows users to determine their skin type and receive personalized skin care recommendations and communicate with others with similar skin types. Stack: Vue3, Flask',
    url: 'https://devpost.com/software/skin-mbti?ref_content=user-portfolio&ref_feature=in_progress',
    image: 'https://images-portfolio-web.s3.ap-southeast-2.amazonaws.com/portfolio-1.png',
  },
  {
    title: 'We Hear You',
    description: 'A Personal project that focuses on people who are experiencing mental health issues and want to find a place to talk to others. Stack: Vue3, Firebase, Bootstrap, JavaScript',
    url: 'https://github.com/y1hanh/WeHearYou',
    image: 'https://images-portfolio-web.s3.ap-southeast-2.amazonaws.com/portfolio-2.png',
  },
  {
    title: 'Luna Log',
    description: 'A android app that allows users to track and predict their period and ovulation cycle. Stack: Android Studio, Kotlin',
    url: 'https://github.com/y1hanh/LunaLog',
    image: 'https://images-portfolio-web.s3.ap-southeast-2.amazonaws.com/portfolio-3.png',
  }
 
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2023 - June 2025(expected)',
    location: 'Monash University',
    title: 'Master of Information Technology',
    content: <p>•	WAM: 81 | GPA: 3.6/4.0.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024',
    location: 'Skin MBTI, FoundersHack Hackathon',
    title: 'Front End Development',
    content: (
      <ul>
        <li>•	Engineered a web application for skin type identification utilizing Machine Learning, Python Flask, and Vue3.</li>
        <li>•	Spearheaded front-end development and conducted rigorous testing to ensure flawless code integration.</li>
      </ul>
    ),
  },
  {
    date: 'May 2024',
    location: 'Image Detection Application, Cloud Computing Class Assignment',
    title: 'Full Stack Development',
    content: (
      <ul>
        <li>•	Led the development of an online image tagging system, deploying AWS Lambda and API Gateway for seamless cloud functionality.</li>
        <li>•	Directed the front-end architecture and managed cloud deployment to optimize system performance.</li>
      </ul>
    ),
  },
  {
    date: 'March 2024 - Ongoing',
    location: 'Monash Squash Club, Monash University',
    title: 'Committee Member',
    content: (
      <ul>
        <li>•	Organize and manage social events, fostering a vibrant and engaged community within the club.</li>
        <li>•	Provide strategic support during pennant finals, ensuring smooth operations and team coordination.</li>
      </ul>
    ),
  },
  {
    date: 'March 2022 - December 2022',
    location: 'Bilibili',
    title: 'Software Engineer Intern, Platform Technology',
    content: (
      <ul> <li>•  Crafted and customized user interface components using JavaScript, TypeScript, Webpack, and Vue3, enhancing the platform's user experience. </li>
      <li>•  Enhanced front-end performance, achieving a 20% reduction in page load times through optimized coding and asset management strategies.</li>
      <li>•  Collaborated with cross-functional teams to diagnose and resolve complex issues, ensuring robust and reliable platform operations.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Let\'s connect and explore opportunities to work together!',
  items: [
    {
      type: ContactType.Email,
      text: 'huangehan@gmail.com',
      href: 'mailto:huangehan@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Melbourne, Victoria',
      href: 'https://maps.app.goo.gl/T2nkPyA3z2qCEu8CA',
    },
    {
      type: ContactType.Github,
      text: '@y1hanh',
      href: 'https://github.com/y1hanh',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/y1hanh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yihan-huang-10963a238/'},
];
