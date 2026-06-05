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
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

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

export const highlightsData = [
  { label: "Name", value: "Than Channa" },
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Location", value: "Phnom Penh, Cambodia" },
  { label: "Email", value: "thanchanna2026@gmail.com" },
];

export const skillsData = [
  { name: "HTML5", percent: 95, color: "from-orange-500 to-orange-400" },
  { name: "CSS", percent: 90, color: "from-blue-500 to-blue-400" },
  { name: "JavaScript", percent: 90, color: "from-yellow-400 to-yellow-300" },
  { name: "Next.js", percent: 75, color: "from-indigo-500 to-indigo-400" },
  { name: "Tailwind CSS", percent: 85, color: "from-teal-500 to-teal-400" },
  { name: "Python", percent: 85, color: "from-green-500 to-green-400" },
];

export const contactInfoData = [
  {
    icon: MdEmail,
    label: "Email",
    value: "thanchanna2026@gmail.com",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+855 12 345 678",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Phnom Penh, Cambodia",
  },
];
