import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export const socialLinksData = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    id: 4,
    icon: FaTelegramPlane,
    href: "https://telegram.org",
    label: "Telegram",
  },
];

export const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Build responsive and modern websites using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Create mobile applications for Android and iOS with modern technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "Design clean, user-friendly, and attractive interfaces for web and mobile applications.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Develop APIs and server-side applications using FastAPI, ASP.NET Core, Node.js, and other backend technologies.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Design and manage databases such as MongoDB, PostgreSQL, and SQL Server.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Provide updates, bug fixes, performance optimization, and ongoing support.",
  },
];

export const skillsData = [
  { name: "HTML5", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 90 },
  { name: "Python", percent: 85 },
  { name: "Next.js", percent: 70 },
  { name: "Tailwind CSS", percent: 80 },
];
