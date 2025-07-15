'use client'
import { menuItems } from "@/data/data";
import Menu from "./ui/menu";
import DarkModeToggle from "./ui/darkModeToggle";
import { useTheme } from "next-themes";
import SocialMedia from "./ui/socialMedia";

export default function Header() {
  const {theme,setTheme} = useTheme()
  const toggleDarkMode = () => {
    if(theme==="light"){
        setTheme("dark")
    } else setTheme('light')
  }

  return (
    <header className="w-full flex flex-col md:flex-row items-center md:justify-between px-4 py-4 md:px-10 md:py-6 gap-4 md:gap-0">
      <div className="flex-1 flex items-center justify-center min-h-[56px]">
        <Menu items={menuItems} />
      </div>
      <div className="flex items-center gap-4 min-h-[56px]">
        <DarkModeToggle setDarkMode={toggleDarkMode} />
        <SocialMedia />
      </div>
    </header>
  )
}