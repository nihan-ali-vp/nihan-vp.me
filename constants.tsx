
import React from 'react';
import type { SkillCategory, Project } from './types';
import { SiTypescript, SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit, SiArduino, SiRaspberrypi, SiNextdotjs, SiTailwindcss, SiVercel, SiLinux } from 'react-icons/si';

export const PERSONAL_INFO = {
  name: "Nihan Ali",
  title: "Full-Stack Developer",
  githubUsername: "nihan-vp",                     
  socials: {
    github: "https://github.com/nihan-vp",
    linkedin: "https://in.linkedin.com/in/nihan-ali-vp-b902ab382",
    twitter: "https://twitter.com",
  },
  email: "qwerty311980@gmail.com"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Linux", icon: <SiLinux className="text-white" /> },
    ]
  },
  {
    title: "IoT & Hardware",
    skills: [
      { name: "Arduino", icon: <SiArduino className="text-teal-500" /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-red-600" /> },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Workshop Management System",
    description: "A comprehensive web application designed to streamline the management of workshops and training sessions. Features include user registration, scheduling, and resource allocation. Built with React for the frontend and firebase for the backend.",
    tags: ["React", "Firebase", "CSS"],
    imageUrl: "assets/wms.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Open CV Shape Detector",
    description: "An AI-powered application that detects and classifies geometric shapes in images using OpenCV and machine learning algorithms. The project leverages Next.js for the frontend interface and TypeScript for type safety.",
    tags: ["React", "TypeScript", "OpenCV", "Machine Learning"],
    imageUrl: "assets/shape_detector.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Pi Value Viewer",
    description: "A Web that displays the digits of Pi in real-time, fetching data from a backend service. Built with React and styled using Tailwind CSS for a responsive design.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    imageUrl: "assets/pi_viewer.png",
    repoUrl: "#",
  },
   
];
