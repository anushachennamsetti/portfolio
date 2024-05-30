import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  TicTacToe,
  boLunchBox,
  prajwalan,
  Startathon,
  SihInternal,
  StartUpExpo,
  TakeHiro,
  AyushDrCafe,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

		"Hi, I’m Anusha. My academic journey has equipped me with a robust foundation in both the technical and creative realms of design and development. I specialize in Full Stack Development, with proficiency in Python, JavaScript, HTML, CSS, React, and PHP basics. I also excel in using Figma and have a deep passion for UI/UX design.",
    "I love cooking. It's like a fun puzzle, and it helps me become a better problem-solver, which I think is important",
    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "BO Lunch Box",
    description: 'Developed a software solution for BO Lunch Box that notifies parents about lunch pick-up, provides live location tracking, and confirms delivery at school, ensuring fresh, nutritious meals for students.',
    image: boLunchBox,
    source_code_link: 'https://github.com/Sanjay-914491/Michael',
    demo_link: 'http://saipraveen.free.nf/lunchbox/',
  },
  {
    name: 'TAKEHIRO',
    description: 'Designed the TAKEHIRO app, prioritizing safety and convenience, with intuitive interfaces and user-centric features aimed at ensuring secure and punctual transportation experiences.',
    image: TakeHiro,
    demo_link: 'https://www.behance.net/gallery/183396619/Take-Hiro',
  },
  {
    name: 'Tic Tac Toe',
    description: 'Developed a sleek Tic-Tac-Toe Game with a space-themed dark mode using HTML, CSS, and JavaScript. Included features like dynamic turn indicators, smooth animations, and modal notifications for an engaging user experience.',
    image: TicTacToe,
    source_code_link: 'https://github.com/anushachennamsetti/Tic-tac-toe',
    demo_link: 'https://youtu.be/TwMNFdFZpAo',
  },
  {
    name: 'Ayush Dr.Cafe',
    description: "For the organic restaurant in Bhimavaram, I crafted a sleek static website showcasing their menu, products, location, and contact details. It offers a seamless browsing experience for visitors, promoting the restaurant's offerings effectively.",
    image: AyushDrCafe,
    source_code_link: 'https://github.com/anushachennamsetti/ayushdrcafe',
    demo_link: 'https://anushachennamsetti.github.io/ayushdrcafe/',
  },

  
];
const projects2 =[
  {
    name: "PRAJWALAN 2K23",
    description: "Secured 2nd place at Prajwalan 2K23, a national-level hackathon, with an innovative software solution. Awarded ₹10,000 prize for our team's success in the intense 24-hour competition.",
    image: prajwalan,
    demo_link: 'https://www.instagram.com/p/CqS1bNMP9kj/?igsh=MzFucnVra3E2MTd6',
  },
  {
    name: 'STARTATHON',
    description: 'Recognized for our startup venture at Startathon, an event organized by leading institutions including IIT Madras and Wadhwani Foundation. We pitched our innovative idea to angel investors, securing funding and valuable mentorship to propel our startup journey forward',
    image: Startathon,
    demo_link: 'https://drive.google.com/file/d/1GWRt98TrXlGXu6ku3QxE0M4ow4EXDBVS/view?usp=sharing',

  },
  {
    name: 'START-UP EXPO',
    description: 'We secured the winning position at the Startup Expo conducted by NIT AP, where we showcased our innovative solutions and gained valuable insights into entrepreneurship and innovation.',
    image: StartUpExpo,
    demo_link: 'https://www.instagram.com/p/CpDWdCWPRtw/?igsh=YXh4OWJtM3M5czhh',

  },
  {
    name: 'SIH INTERNAL HACKATHON',
    description: 'Selected for the SIH Internal Hackathon, highlighting our innovative solutions and problem-solving abilities. Excited to compete and collaborate on impactful projects.',
    image: SihInternal,
    demo_link: 'https://youtu.be/i9pZ7IDgAUk?si=LRCWLUKA4likTvdi',

  },

];


const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'Have basic knowledge on pyhton programming language',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  projects2,
  memoji,
  skills,
  markerSvg,
  icons,
};
