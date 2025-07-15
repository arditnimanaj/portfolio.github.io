import {stackItems} from "@/data/data";
import Image from "next/image";

export default function Stack() {
    return (
        <div className="w-full text-center py-40">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 text-center">
          My Tech Stack
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-8 text-gray-600 dark:text-gray-300 text-center">
          Technologies I&apos;ve been working on
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-center p-8">
            {stackItems.map((item) => (
                <div key={item.name} className="flex flex-col items-center justify-center">
                    <Image src={item.icon} alt={item.name} width={64} height={64} className="w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300 mb-2" />
                    <span className="mt-2 text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">{item.name}</span>
                </div>
            ))}
        </div>
        </div>
    )
}