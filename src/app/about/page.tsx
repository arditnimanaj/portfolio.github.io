import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import arditImage from "../../../public/22.jpg"

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300">
        About Me
      </h1>

      <Image
        src={arditImage}
        alt="Ardit Nimanaj"
        width={180}
        height={180}
        className="rounded-full border-4 border-orange-300 dark:border-orange-500 shadow-lg mb-6 object-cover"
      />

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 max-w-xl">
        Hi! I&apos;m <span className="font-bold">Ardit Nimanaj</span>, a passionate web developer who loves building cool things for the internet. When I&apos;m not coding, you can find me exploring new tech, enjoying a good cup of coffee, or making people laugh with my (sometimes questionable) jokes!
      </p>

      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow w-full max-w-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300">Fun Facts & Hobbies</h2>
        <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-200 space-y-2">
          <li>Big fan of sci-fi movies and tech podcasts.</li>
          <li>Love mountains and hiking adventures.</li>
          <li>BMW enthusiast - always excited about cars and engineering.</li>
          <li>Always up for a game of chess or table tennis.</li>
          <li>My favorite code editor theme is (of course) dark mode!</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full max-w-lg">
        {/* Facebook */}
        <div className="flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <FaFacebook className="text-blue-600 dark:text-blue-400 text-3xl mb-2" />
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-100 font-semibold"
          >
            Facebook
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <FaGithub className="text-gray-900 dark:text-white text-3xl mb-2" />
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-100 font-semibold"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <FaLinkedin className="text-blue-700 dark:text-blue-300 text-3xl mb-2" />
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-100 font-semibold"
          >
            LinkedIn
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <FaEnvelope className="text-red-600 dark:text-red-400 text-3xl mb-2" />
          <a
            href="mailto:your@email.com"
            className="text-gray-800 dark:text-gray-100 font-semibold"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
