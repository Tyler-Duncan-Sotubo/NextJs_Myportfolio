import { NavData, IProjects } from "@/lib/interface";
import {
  FaGithub,
  FaHome,
  FaBook,
  FaReact,
  FaAws,
  FaStripe,
  FaPaypal,
} from "react-icons/fa";
import {
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiTailwindcss,
  SiMongodb,
  SiDjango,
  SiPython,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";

// data.js

// Programming Languages
export const Lang = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Python" },
];

// Libraries & Frameworks
export const Frameworks = [
  { name: "React" },
  { name: "React Native" },
  { name: "Redux" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "jQuery" },
];

// Others
export const Others = [
  { name: "Docker" },
  { name: "AWS" },
  { name: "GitHub" },
  { name: "Kubernetes" },
  { name: "Jenkins" },
];

export const database = [
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Redis" },
];

// Skills Data
export const skills = [
  { name: "Web and Software Development" },
  { name: "Shell Scripting and Automation" },
  { name: "Public key infrastructure and cryptography" },
  { name: "Financial Services" },
  { name: "Strong grasp of Blockchain ecosystem" },
  {
    name: "Advanced critical thinker with strong problem solving capablilites",
  },
  { name: "Windows and Linux system administration" },
  { name: "Data analysis and Databases" },
  { name: "Asynchronous Programming" },
  { name: "Microservices" },
  { name: "RESTful HTTP web services" },
  { name: "Solution architecture" },
];

export const navData: NavData[] = [
  { name: "Home", path: "/", icon: <FaHome size={25} /> },
  { name: "experience", path: "/resume", icon: <FaBook size={25} /> },
  {
    name: "Github",
    path: "https://github.com/Tyler-Duncan-Sotubo",
    icon: <FaGithub size={25} />,
  },
];

export const AboutData = [
  { name: "Home", path: "" },
  { name: "experience", path: "/resume" },
  { name: "Github", path: "https://github.com/Tyler-Duncan-Sotubo" },
];

export const experience = [
  {
    company: "Upwork",
    role: "Freelance Software Engineer",
    date: "July 2024 – Present",
    desc: "As a Freelance Software Engineer on Upwork, I collaborate with clients worldwide to deliver custom, high-quality web solutions. My work includes developing scalable backend systems using Node.js and microservices, building RESTful APIs, and creating efficient front-end components with modern frameworks like React. I ensure seamless integration, performance optimization, and client satisfaction by tailoring solutions to specific project requirements.",
    objectives: [
      "Delivering robust and scalable web applications for clients in various industries.",
      "Providing technical expertise and creative solutions for challenging project requirements.",
    ],
    accomplishments: [
      "Successfully completed 10+ projects with 5-star client reviews on Upwork.",
      "Optimized application performance for a client’s e-commerce platform, reducing server response time by 40%.",
      "Implemented secure, scalable microservices for multiple clients, enabling seamless data communication across distributed systems.",
    ],
  },

  {
    company: "Mediareach OMD",
    role: "Lead Software Engineer",
    date: "Sept 2023 - June 2024",
    desc: "",
    objectives: [
      "Spearheaded the design, development, and deployment of multiple full-stack web applications using modern technologies, focusing on scalability, user experience, and operational efficiency.",
      "Designed and developed four full-stack web applications using Node.js, Next.js, and the P.E.R.N. stack, delivering seamless front-end interfaces and robust back-end functionalities.",
      "Engineered scalable backends with Node.js, integrating PostgreSQL for secure and efficient data storage and management.",
    ],
    accomplishments: [
      "Successfully delivered four full-stack web applications, contributing to increased client satisfaction and operational efficiency.",
      "Collaborated with cross-functional teams to deliver projects on time and within budget while ensuring code quality and maintainability.",
      "Demonstrated strong technical expertise, consistently meeting client expectations with scalable, reliable, and maintainable software solutions.",
    ],
  },
  {
    company: "Alat Wema Bank",
    role: "Backend Engineer",
    date: "June 2022 – August 2023",
    desc: "",
    objectives: [
      "Develop and maintain scalable backend services and APIs using Node.js and TypeScript to support Alat Wema Bank's digital banking solutions.",
      "Implement robust security measures, including OAuth 2.0 and JWT authentication, to safeguard sensitive customer data and ensure compliance with banking regulations.",
      "Optimize database performance and ensure data integrity by managing PostgreSQL databases and designing efficient data models.",
    ],
    accomplishments: [
      "Developed and deployed a full-stack AI-powered financial advisory platform, enhancing customer engagement and providing personalized investment insights.",
      "Led the creation of a real-time transaction monitoring system, significantly reducing fraudulent activities and enhancing the bank's security posture.",
      "Implemented CI/CD pipelines that accelerated deployment cycles by 50%, ensuring timely delivery of new features and updates.",
    ],
  },
  {
    company: "tooXclusive Ltd",
    role: "Fullstack Software Developer",
    date: "Mar-2019 - May-2022",
    desc: ``,
    objectives: [
      "Developed a customized Web Applications, focusing on a user-friendly interface and a robust Node.js backend. Implemented advanced features like real-time notifications and secure user authentication with MongoDB.",
      "Built and deployed Next.js web apps optimized for responsiveness and user experience, ensuring seamless interactions and enhanced security. Integrated MongoDB for backend support, delivering a reliable and interactive platform.",
      "We used the Nest.js framework within a Node.js environment, deploying the application to Google Kubernetes Engine (GKE). This setup provided scalable and reliable infrastructure through Kubernetes' powerful orchestration tools",
    ],
    accomplishments: [
      "Developed a full-stack music distribution website with a user-friendly interface and real-time notifications, enhancing the user experience and engagement.",
      "Led the development of web apps and backend microservices for 50+ local businesses, providing a white-label solution with advanced features like event registration and e-commerce.",
      "Developed an innovative customer relationship management software used by the federal government to manage customer loans and complaints which led to 40% reduction in loan defaults.",
    ],
  },
  {
    company: "",
    role: "Freelance Software Developer",
    date: "Jan 2018 - Feb 2019",
    desc: ``,
    objectives: [
      "Implemented an open-source ERP system for clients",
      "Developed and maintained websites for clients, ensuring optimal performance and user experience",
      "leveraging strong understanding of WordPress core to manipulate admin and theme components to deliver quality commercial websites.",
    ],
    accomplishments: [
      "Cleverly managed multiple client domains with an implemented reverse proxy server, ensuring secure and efficient data transfer.",
    ],
  },
];

export const projectData: IProjects[] = [
  {
    name: "Pro Learning App",
    madeat: "Upwork",
    img: "/assets/img/projects/pro.jpg",
    desc: `<p>Pro Learning is an advanced Learning Management System (LMS) designed for seamless and scalable learning experiences. Built using React Native, it offers a highly intuitive and responsive user interface, ensuring smooth navigation for learners.</p>
         <p>The backend is powered by NestJS in a microservices architecture, enabling high performance and scalability. PostgreSQL, coupled with Redis, ensures efficient data management and caching, while RabbitMQ facilitates reliable communication between distributed services.</p>
         <p>The app is backend is deployed on AWS, leveraging Docker for containerization and Drizzle ORM for optimized database interactions. For secure payment processing, it integrates seamlessly with PayPal.</p>`,
    source:
      "https://play.google.com/store/apps/details?id=com.tylerappdev.jambeLearningapp",
    web: "https://play.google.com/store/apps/details?id=com.tylerappdev.jambeLearningapp",
    tech: [
      { name: "React Native" },
      { name: "Nest JS (Micro-Service)" },
      { name: "Typescript" },
      { name: "PostgreSQL" },
      { name: "AWS" },
      { name: "Redis" },
      { name: "RabbitMQ" },
      { name: "Docker" },
      { name: "Drizzle ORM" },
      { name: "Paypal" },
    ],
    techIcons: [
      { icon: <FaReact size={40} /> },
      { icon: <DiNodejs size={40} /> },
      { icon: <SiNestjs size={40} /> },
      { icon: <SiTypescript size={40} /> },
      { icon: <SiPostgresql size={40} /> },
      { icon: <SiRedis size={40} /> },
      { icon: <FaAws size={40} /> },
      { icon: <SiRabbitmq size={40} /> },
      { icon: <SiDocker size={40} /> },
      { icon: <FaPaypal size={40} /> },
    ],
  },
  {
    name: "AI Icon Generator",
    madeat: "Upwork",
    img: "/assets/img/projects/icon.png",
    desc: `<p>AI Icon Generator is a web application that empowers users to create custom icons using artificial intelligence. Developed with Next.js, it features a highly interactive and modern front-end interface.</p>
         <p>The AI model leverages OpenAI’s DALL-E to generate unique icons, while PostgreSQL serves as the reliable database. The application also integrates Amazon S3 for efficient storage, NextAuth for secure user authentication, and Stripe for streamlined payment processing.</p>
         <p>The combination of tRPC and Prisma ensures seamless API communication and robust database management, with Tailwind CSS enhancing the visual appeal.</p>`,
    source: "https://github.com/Tyler-Duncan-Sotubo/logo-generator",
    web: "https://iconaistudio.com/",
    tech: [
      { name: "Typescript" },
      { name: "Next JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Tailwind CSS" },
      { name: "OpenAI" },
      { name: "NextAuth" },
      { name: "tRPC" },
      { name: "Prisma" },
      { name: "Stripe" },
    ],
    techIcons: [
      { icon: <SiTypescript size={40} /> },
      { icon: <TbBrandNextjs size={40} /> },
      { icon: <SiPostgresql size={40} /> },
      { icon: <FaAws size={40} /> },
      { icon: <SiTailwindcss size={40} /> },
      { icon: <FaStripe size={40} /> },
    ],
  },
  {
    name: "We Plug Music",
    madeat: "Upwork",
    img: "/assets/img/projects/weplug.png",
    desc: `<p>We Plug Music is a full-stack music distribution platform that empowers artists to share their music and earn from streams and downloads. Built with Node.js and NestJS for a scalable and secure backend, and Next.js for a dynamic front-end, the platform delivers an exceptional user experience.</p>
         <p>MongoDB ensures efficient data management, while the artist dashboard provides insightful analytics and earnings tracking. Integrated with Amazon S3 for secure file storage and PayPal for payments, this system offers a comprehensive solution for music distribution.</p>
         <p>Redux Toolkit ensures state management, while Tailwind CSS provides a sleek, modern interface.</p>`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://weplugmusic.com/",
    tech: [
      { name: "Typescript" },
      { name: "Nest JS" },
      { name: "Next JS" },
      { name: "Mongo DB" },
      { name: "Amazon S3 Bucket" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
      { name: "Paypal" },
    ],
    techIcons: [
      { icon: <DiNodejs size={40} /> },
      { icon: <SiTypescript size={40} /> },
      { icon: <SiNestjs size={40} /> },
      { icon: <TbBrandNextjs size={40} /> },
      { icon: <SiMongodb size={40} /> },
      { icon: <FaAws size={40} /> },
      { icon: <SiTailwindcss size={40} /> },
      { icon: <FaPaypal size={40} /> },
    ],
  },
  {
    name: "Smirnoff Party",
    madeat: "MediareachOMD Nigeria",
    img: "/assets/img/projects/Smirnoff2024.png",
    desc: `<p>The Smirnoff Party campaign website is a dynamic event registration platform built using the T3 Stack. Users can register with their email and Instagram handle, with registrations securely stored in a PostgreSQL database.</p>
         <p>Upon successful registration, users receive a QR code for entry and a welcome email via SendGrid. The front-end is crafted with Next.js and styled using Tailwind CSS, ensuring a modern and user-friendly interface.</p>
         <p>Amazon S3 manages file storage, while tRPC and Prisma handle API and database interactions for a seamless backend experience.</p>`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://weplugmusic.com/",
    tech: [
      { name: "Typescript" },
      { name: "Next JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Tailwind CSS" },
      { name: "OpenAI" },
      { name: "NextAuth" },
      { name: "tRPC" },
      { name: "Prisma" },
    ],
    techIcons: [
      { icon: <SiTypescript size={40} /> },
      { icon: <TbBrandNextjs size={40} /> },
      { icon: <SiPostgresql size={40} /> },
      { icon: <FaAws size={40} /> },
      { icon: <SiTailwindcss size={40} /> },
    ],
  },

  {
    name: "Gazetteer App",
    madeat: "IT Career Switch",
    img: "/assets/img/projects/gazet.png",
    desc: `Gazetteer, a mobile first web application that allows users to search for a location and get information about the location. 
    It provides information about the location, weather, and nearby places of interest. 
    The app was built using HTML, PHP, jQuery/AJAX, Leaflet, Bootstrap, and APIs.`,
    source:
      "https://github.com/Tyler-Duncan-Sotubo/tylerDuncan/tree/main/project1",
    web: "https://tylersotubo.co.uk/gazetteer/",
    tech: [
      { name: "HTML" },
      { name: "PHP" },
      { name: "jQuery/AJAX" },
      { name: "Leaflet" },
      { name: "Bootstrap" },
      { name: "APIs" },
    ],
  },
  {
    name: "Company Directory",
    madeat: "IT Career Switch",
    img: "/assets/img/projects/company.png",
    desc: `Company Directory, a mobile first web application that allows users access to the database to add, edit, delete data.it allows users to search or filter company information within the database.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Company-Directory",
    web: "https://tylersotubo.co.uk/company/",
    tech: [
      { name: "HTML" },
      { name: "PHP" },
      { name: "jQuery/AJAX" },
      { name: "Bootstrap" },
      { name: "MySQL" },
      { name: "phpMyAdmin" },
    ],
  },
  {
    name: "Sportzy",
    madeat: "tooXclusive",
    img: "/assets/img/projects/sportzy.png",
    desc: `Full Stack Ecommerce website built using the P.E.R.N Stack,
    the client side was built using Next Js and Redux Tool Kit for state management.
    Data is fetched from the backend API built using Express Js and PostgreSQL.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://full-stack-ecommerce-sable.vercel.app/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Lyrics Plug",
    madeat: "tooXclusive",
    img: "/assets/img/projects/plug.png",
    desc: `This is a lyrics website, built using the M.E.R.N Stack, 
    Data is fetched from the backend API built using Express Js and MongoDB. 
    Client and Admin side are built using Next Js and Redux Tool Kit for state management.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Lyrics-App",
    web: "https://absorbing-stone-production.up.railway.app/",
    tech: [
      { name: "Express JS" },
      { name: "Mongo DB" },
      { name: "Cloudinary" },
      { name: "Typescript" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Smirnoff Party",
    madeat: "MediareachOMD Nigeria",
    img: "/assets/img/projects/NoknownAddress.png",
    desc: `Global Client Smirnoff's project for the Smirnoff "NoknownAddress" Party Campaign.  
    The website was built using the P.E.R.N Stack.
    The wesbite focus was to allow users to register for the party with email address and instagram handle.
     The backend API was built using Express Js and PostgreSQL.
     Registered users were stored in a PostgreSQL database and Welcome Email sent with NodeMailer`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Smirnoff-party",
    web: "https://smirnoff-party-frontend-production.up.railway.app/",
    tech: [
      { name: "Typescript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Vanilla CSS" },
    ],
  },

  {
    name: "Artists Profile API",
    madeat: "tooXclusive",
    img: "/assets/img/projects/artistApi.png",
    desc: `This is an Open API built using Express Js and PostgreSQL. The project is till in progress.
    The aim is to build an API that can be used by artists to create their profile and share their work.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Artist-Profile-API",
    web: "/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Swagger" },
    ],
  },
  {
    name: "Portfolio Version 1",
    madeat: "Personal Project",
    img: "/assets/img/projects/version1.png",
    desc: `This is the first version of my portfolio website built using Next Js and Tailwind CSS.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Portfolio-V1",
    web: "https://v1.tylerduncan.dev/",
    tech: [
      { name: "Javascript" },
      { name: "Next Js" },
      { name: "Tailwind CSS" },
    ],
  },
];
