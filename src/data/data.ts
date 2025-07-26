import html from "../../public/html-5-svgrepo-com.svg";
import css from "../../public/css-3-svgrepo-com.svg";
import javascript from "../../public/js-svgrepo-com.svg";
import react from "../../public/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextjs from "../../public/next-js-svgrepo-com.svg";
import tailwind from "../../public/tailwindcss-icon-svgrepo-com.svg";
import graphql from "../../public/graphql-svgrepo-com.svg";
import prisma from "../../public/light-prisma-svgrepo-com.svg";
import typescript from "../../public/typescript-official-svgrepo-com.svg";
import wordpress from "../../public/wordpress-svgrepo-com.svg";
import bininyclogo from "../../public/projectLogos/bininyc.png";
import blooddonationlogo from "../../public/projectLogos/blooddonation.jpg";
import leoLogo from "../../public/projectLogos/LeoLogo.png";
import rentkoslogo from "../../public/projectLogos/rentkoslogo.png";
import shalaLogo from "../../public/projectLogos/shalaLogo.svg";
import pabauLogo from "../../public/projectLogos/pabaulogo.png";

export const menuItems = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/work",
    name: "Work",
  },
  {
    href: "/about",
    name: "About",
  },
];

export const stackItems = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
];

export const projects = [
  {
    id: 0,
    name: "Pabau CRM",
    technologies: ["React", "TS", "GraphQL", "Prisma", "NextJS"],
    webLink: "www.pabau.com",
    github: "",
    youtube: "",
    logo: pabauLogo,
    description:
      "I work as a developer on this project. Pabau CRM is a large, scalable health clinic app used by clinics worldwide.",
  },
  {
    id: 1,
    name: "Leo Flachdachbau GMBH",
    technologies: ["wordpress"],
    webLink: "www.leo-flachdachbau.de",
    github: "",
    youtube: "",
    logo: leoLogo,
    description:
      "I made this project from scratch for Leo Flachdachbau GMBH, handling all aspects of the website's design and development.",
  },
  {
    id: 3,
    name: "Bini Autorepair INC",
    technologies: ["html", "css", "javascript", "react", "tailwind"],
    webLink: "www.biniautorepair.com",
    github: "https://github.com/arditnimanaj/biniautorepairnyc",
    youtube: "",
    logo: bininyclogo,
    description:
      "I made this project from scratch for Bini Autorepair INC, building a modern and responsive web presence.",
  },
  {
    id: 4,
    name: "RentKOS",
    technologies: [
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "mongoDB",
      "NodeJS",
      "ExpressJs",
    ],
    webLink: "",
    github: "https://github.com/arditnimanaj/rentalcarapp",
    youtube: "https://youtu.be/6j5vodowyvU?si=TFjbvSoSAg-9hrEX",
    logo: rentkoslogo,
    description:
      "I made this project from scratch, developing both the frontend and backend for RentKOS, a rental platform.",
  },
  {
    id: 5,
    name: "Blood Donor App",
    technologies: [
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "mongodb",
      "nodejs",
      "expressjs",
    ],
    webLink: "",
    github: "https://github.com/arditnimanaj/blood_donor",
    youtube: "",
    logo: blooddonationlogo,
    description:
      "I made this project from scratch, building a full-stack blood donor app to connect donors and recipients.",
  },
  {
    id: 6,
    name: "Shala Autorepair INC",
    technologies: ["html", "css", "javascript", "react", "tailwind"],
    webLink: "www.shalaautorepair.com", 
    github: "https://github.com/arditnimanaj/bodyshop-nyc",
    youtube: "",
    logo: shalaLogo,
    description:
      "I made this project from scratch for Shala Autorepair INC, delivering a custom website tailored to their needs.",
  },
];
