export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Angel was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Angel’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Angel. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Angel was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Workout Buddy',
    desc: 'A comprehensive fitness tracking application built on the MERN stack. It offers personalized workout management with secure user authentication via JWT. Users can create, update, and delete exercises, all stored in a MongoDB database with user-specific data relationships. The app showcases full CRUD operations, state management, and RESTful API integration. The backend is deployed on Render.io, while the frontend is hosted on Vercel, ensuring optimal performance and scalability.',
    subdesc: 'Developed using MongoDB, Express.js, React, and Node.js (MERN stack), with JWT for authentication. Backend deployed on Render.io and frontend on Vercel.',
    href: 'https://workout-app-lake.vercel.app',
    texture: '/textures/project/workout-buddy.mp4',
    logo: '/assets/workout-buddy-logo.png',
    logoStyle: {
      backgroundColor: '#e0ffe0',
      border: '0.2px solid #a0ffa0',
      boxShadow: '0px 0px 60px 0px #00ff004d',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'MongoDB', path: '/assets/mongodb.png' },
      { id: 3, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 4, name: 'Express.js', path: '/assets/express.png' },
      { id: 5, name: 'JWT', path: '/assets/jwt.png' },
    ],
  },
  {
    title: 'Tic-Tac-Toe',
    desc: 'A classic Tic-Tac-Toe game implemented using React. This project demonstrates fundamental React concepts including state management with useState, refs with useRef, and conditional rendering. The game features a clean, interactive UI with dynamic player turns, win detection, and a reset functionality. It showcases the ability to manage game state, handle user interactions, and implement game logic in a React environment.',
    subdesc: 'Built with React, utilizing hooks for state management and deployed on Vercel.',
    href: 'https://tic-tac-toe-pearl-beta.vercel.app',
    texture: '/textures/project/tic-tac-toe.mp4',
    logo: '/assets/tic-tac-toe-logo.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 60px 0px #ff00004d',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
    ],
  },
  {
    title: 'To-Do App',
    desc: 'An interactive and dynamic To-Do List application built with React, showcasing proficiency in state management and user interface design. This project implements core React concepts such as functional components, hooks (useState), and efficient list rendering. It features a clean, intuitive interface allowing users to add, delete, and reorder tasks dynamically. The app demonstrates advanced JavaScript array manipulations for task management, including filtering for deletions and swapping for reordering.',
    subdesc: 'Developed using React with hooks for state management, featuring real-time updates and deployed on Vercel for optimal performance and accessibility.',
    href: 'https://to-do-app-omega-smoky.vercel.app',
    texture: '/textures/project/todo-app.mp4',
    logo: '/assets/todo-logo.png',
    logoStyle: {
      backgroundColor: '#ffffd0',
      border: '0.2px solid #ffff80',
      boxShadow: '0px 0px 60px 0px #ffff004d',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
    ],
  },
  {
    title: 'Three Portfolio',
    desc: 'A cutting-edge, immersive 3D portfolio leveraging advanced web technologies. This project showcases complex Three.js integrations, including custom shaders, optimized 3D model loading, and performant rendering techniques. It features an interactive 3D hacker room, dynamically animated project showcases, and a responsive design that adapts seamlessly across devices. The portfolio incorporates advanced React patterns for state management, custom hooks for 3D interactions, and optimized asset loading for improved performance. Key highlights include procedurally generated particle systems, a bespoke timeline component with GSAP animations, and server-side rendering for improved SEO.',
    subdesc: 'Engineered with React, Three.js, React Three Fiber, and deployed on Netlify with optimized build processes.',
    href: 'https://angeldelara.netlify.app/',
    texture: '/textures/project/three-portfolio.mp4',
    logo: '/assets/three-portfolio-logo.png',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solid #ffffff',
      boxShadow: '0px 0px 60px 0px #00ff0050',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.png' },
      { id: 3, name: 'Tailwind', path: '/assets/tailwindcss.png' },
      { id: 5, name: 'React Three Fiber', path: '/assets/drei.svg' },
      // { id: 6, name: 'EmailJS', path: '/assets/emailjs.png' },
      { id: 6, name: 'ViteJS', path: '/assets/vitejs.png' },
      { id: 7, name: 'GSAP', path: '/assets/gsap.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SoftPoint LLC',
    pos: 'Frontend Developer',
    duration: '2022 - 2024',
    title: "SoftPoint is a leading FinTech company offering integrated solutions for hospitality, optimizing operations and payments to boost customer experience. Built responsive, scalable web apps using React, Vite, and TypeScript, employing Redux Toolkit and React Query for efficient state management. Designed and maintained a reusable design system, ensuring consistent branding, scalable components, and adherence to WCAG standards. Improved app functionality with multilingual support (i18next) and advanced date-handling (date-fns), enhancing user experience. Achieved 95% code coverage with unit tests (Vitest, Testing Library), reducing production bugs and improving reliability. Collaborated across teams in Mexico, the USA, and India, streamlining workflows and delivering projects on time. Enhanced performance with optimized UI components, reducing load times and boosting accessibility.",
    techStack: 'React, Vite, TypeScript, Redux, Tailwind CSS, Vitest',
    icon: '/assets/softpoint.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Saeko Inc',
    pos: 'Frontend Developer',
    duration: '2020 - 2022',
    title: "Saeko is the largest SaaS platform in Latin America, offering integrated solutions for academic planning, school management, and payments. Enhanced performance for 10,000+ active users, reducing page load times by 25%. Designed reusable, scalable components integrated into a robust design system. Delivered accessible interfaces aligned with WCAG standards, improving usability for diverse audiences. Spearheaded development of complex views like the Teacher Portal, used by 5,000+ educators for scheduling, attendance, and grading. Reduced bug resolution time by 30% through effective collaboration with backend and design teams. Contributed 150+ GitHub commits per month, maintaining 100% SLA compliance.",
    techStack: 'React, TypeScript, Styled Components, Redux, Material UI, Jest',
    icon: '/assets/saeko.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'First Citizens Bank',
    pos: 'Junior Web Developer & Technical Support',
    duration: '2019 - 2020',
    title: "Provided advanced technical support for web-based banking applications, troubleshooting complex issues and collaborating with development teams to implement solutions. Assisted in front-end development tasks, including bug fixes and minor feature enhancements using HTML, CSS, and JavaScript. Contributed to the optimization of internal web tools, improving efficiency and user experience for bank employees.",
    icon: '/assets/fcb-logo.png',
    animation: 'victory',
  },
];