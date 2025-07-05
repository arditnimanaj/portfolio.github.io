import Image from "next/image";
import heroImage from "../../public/22.jpg"

export default function Hero() {

  return (
    <div className="flex w-full gap-20 items-center justify-around p-40">
      <div>
        <h1 className="text-4xl font-bold">Welcome to our website</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <div>
        <Image src={heroImage} alt="hero" className="rounded-full grayscale-100 hover:grayscale-0 transition border-8 w-80 h-80" />
      </div>
    </div>
  )
}