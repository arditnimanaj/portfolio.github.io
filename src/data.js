import bloodLogo from "./logos/blooddonation.jpg";
import rentKOSLogo from "./logos/rentkoslogo.png";
import biniLogo from "./logos/bininyc.png";
import zekajLogo from "./logos/zekajlogo.png";
import leoLogo from "./logos/LeoLogo.png"
import shalaLogo from "./logos/shalaLogo.svg"

export const projects = [
  {
    id: 1,
    category: "Blood Donation App",
    name: "Dhuro Gjak Shpeto Jete",
    technologies: [
      "MERN Stack",
      "HTML/CSS",
      "JavaScript",
      "MongoDB",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS",
    ],
    logo: bloodLogo,
    githubLink: "https://github.com/arditnimanaj/blood_donor",
    hostedLink: "https://dhurogjak-shpetojete.vercel.app/",
  },
  {
    id: 2,
    category: "Rental Car App",
    name: "RentKOS",
    technologies: [
      "MERN Stack",
      "HTML/CSS",
      "JavaScript",
      "MongoDB",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS",
      "AntDesign",
      "MUI Design",
    ],
    logo: rentKOSLogo,
    youtubeLink:
      "https://www.youtube.com/watch?v=6j5vodowyvU&ab_channel=ArditNimanaj",
    githubLink: "https://github.com/arditnimanaj/rentalcarapp",
    hostedLink: null,
  },
  {
    id: 3,
    category: "Static Website",
    name: "Bini Autorepair",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "ReactJS",
      "TailwindCSS",
      "AntDesign",
      "MUI Design",
    ],
    logo: biniLogo,
    githubLink: "https://github.com/arditnimanaj/biniautorepairnyc",
    hostedLink: "https://www.biniautorepair.com",
  },
  {
    id: 4,
    category: "Static Website",
    name: "Zekaj Maler & Gipser",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "ReactJS",
      "TailwindCSS",
      "AntDesign",
      "MUI Design",
    ],
    logo: zekajLogo,
    githubLink: "https://github.com/arditnimanaj/zekajmalergipser",
    hostedLink: "https://www.zekajmalergipser.de",
  },
  {
    id: 5,
    category: "Static Website",
    name: "Shala Auto Body Repair",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "ReactJS",
      "TailwindCSS",
      "AntDesign",
    ],
    logo: shalaLogo,
    githubLink: "https://github.com/arditnimanaj/bodyshop-nyc",
    hostedLink: "https://www.shalaautorepair.com/",
  },
  {
    id: 6,
    category: "Wordpress Website",
    name: "Leo Flachdachbau GMBH",
    technologies: [
      "JavaScript",
      "Wordpress",
      "HTML/CSS",
    ],
    logo: leoLogo,
    hostedLink: "https://www.leo-flachdachbau.de/",
  },
];

export const technologies = [
  "HTML",
  "CSS",
  "JS",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "MERN",
];
export const learningTechnologies = ["Redux", "TypeScript", "NextJS"];
