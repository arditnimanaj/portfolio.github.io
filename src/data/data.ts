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

export const menuItems = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "Projects",
  },
  {
    href: "/",
    name: "About",
  },
  {
    href: "/",
    name: "Contact",
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
    id: 1,
    name: "Leo Flachdachbau GMBH",
    technologies: [wordpress],
    webLink: "www.leo-flachdachbau.de",
    github: "",
    youtube: "",
  },
  {
    id: 2,
    name: "Zekaj Maler & Gipser",
    technologies: [html, css, javascript, react, tailwind],
    webLink: "www.zekajmalergipser.de",
    github: "",
    youtube: "",
  },
  {
    id:3,
    name:"Bini Autorepair INC",
    technologies: [html,css,javascript,react,tailwind],
    webLink: "www.biniautorepair.com",
    github:"",
    youtube:"",
  },
  {
    id:4,
    name: "RentKOS",
    technologies: [html,css,javascript,react,tailwind,"mongoDB","NodeJS","ExpressJs"],
    webLink:"",
    github:"",
    youtube:"",
  },
  {
    id:5,
    name: "Blood Donor App",
    technologies:[html,css,javascript,react,tailwind,'mongodb',"nodejs",'expressjs'],
    webLink:"",
    github:"",
    youtube:"",
}
];
