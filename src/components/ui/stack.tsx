import {stackItems} from "@/data/data";
import Image from "next/image";

export default function Stack() {
    return (
        <div className="w-full text-center">
        <h1>My Tech Stack</h1>
        <span>Technologies I've been working on</span>
        <div className="grid grid-cols-5 gap-28 items-center text-center p-20">
            {stackItems.map((item) => (
                <div key={item.name} className="text-center items-center justify-center px-16 py-1 flex">
                    <Image src={item.icon} alt={item.name} className="w-30 h-30 grayscale-60 hover:grayscale-0 transition" />
                </div>
            ))}
        </div>
        </div>
    )
}