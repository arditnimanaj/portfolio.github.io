import { FaGithub, FaLinkedin,FaFile } from "react-icons/fa";

export default function SocialMedia() {
    return(
        <div className="flex gap-4 justify-center items-center ">
            <a
                href="https://github.com/arditnimanaj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow"
                title="GitHub"
            >
                <FaGithub size={22} />
            </a>
            <a
                href="https://www.linkedin.com/in/ardit-nimanaj-5224781b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors shadow"
                title="LinkedIn"
            >
                <FaLinkedin size={22} />
            </a>
            <a
                href="https://drive.google.com/file/d/1UFfrjf7dot7nDjJiRbnoZ8rbwXrel9Ep/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors shadow"
                title="Resume"
            >
                <FaFile size={22} />
            </a>
        </div>
    )
}