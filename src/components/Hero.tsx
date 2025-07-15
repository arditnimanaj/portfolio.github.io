import Image from "next/image";
import heroImage from "../../public/22.jpg"

export default function Hero() {

  return (
    <div className="flex flex-col-reverse md:flex-row w-full gap-10 md:gap-20 items-center justify-around p-8 md:p-20 lg:p-40">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-1 md:mb-2">Hi <span className="inline-block animate-wave">👋</span>,</p>
        <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-1 md:mb-2">My name is</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 text-center md:text-left">
          Ardit Nimanaj
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6 md:mb-8 text-center md:text-left">I build things for the web</p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src={heroImage} alt="hero" className="rounded-full grayscale hover:grayscale-0 transition border-8 border-orange-200 dark:border-orange-400 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-xl" />
      </div>
    </div>
  )
}