import { projects } from "@/data/data";
import Image from "next/image";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 text-center">
        Projects
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-8 text-gray-600 dark:text-gray-300 text-center">
        Things I&apos;ve built so far
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center border rounded-2xl px-8 py-10 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow justify-between"
        >
          {item.logo && (
            <Image
              src={item.logo}
              alt={item.name}
              width={180}
              height={180}
              className="object-contain grayscale hover:grayscale-0 bg-white rounded-xl mb-4 transition-all"
            />
          )}
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300">
            {item.name}
          </h1>
          {item.description && (
            <span className="mb-4 text-gray-600 dark:text-gray-300">{item.description}</span>
          )}
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-orange-400 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-6 justify-center">
            {item.webLink && (
              <a
                href={item.webLink.startsWith('http') ? item.webLink : `https://${item.webLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors shadow"
                title="Visit Website"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow"
                title="View on GitHub"
              >
                <FaGithub size={22} />
              </a>
            )}
            {item.youtube && (
              <a
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors shadow"
                title="Watch on YouTube"
              >
                <FaYoutube size={24} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
