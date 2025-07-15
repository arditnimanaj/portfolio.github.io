import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-extrabold text-xl text-indigo-900 dark:text-white">{'{AN}'}</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 -mt-1">arditnimanaj</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">+383 45 317 885</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">arditnimanaj@gmail.com</span>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/arditnimanaj" target="_blank" rel="noopener noreferrer" className="text-indigo-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/arditnimanaj" target="_blank" rel="noopener noreferrer" className="text-indigo-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-neutral-800 my-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/technologies">Technologies</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Designed and built by{' '}
            <a
              href="https://github.com/arditnimanaj"
              className="font-semibold text-indigo-700 dark:text-pink-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ardit Nimanaj
            </a>{' '}
            with{' '}
            <span className="text-pink-500 dark:text-pink-400 font-semibold">Love &amp; Ciggarettes</span>
          </span>
        </div>
      </div>
    </footer>
  );
}