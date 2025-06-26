'use client'
import { items } from "@/data/data";
import Menu from "./ui/menu";
import DarkModeToggle from "./ui/darkModeToggle";
import { useTheme } from "next-themes";

export default function Header() {
  const {theme,setTheme} = useTheme()
  const toggleDarkMode = () => {
    if(theme==="light"){
        setTheme("dark")
    } else setTheme('light')
  }

  return (
    <div className="flex flex-row justify-center items-center p-10">
        <Menu items={items} />
        <DarkModeToggle setDarkMode={toggleDarkMode} />
    </div>
  )
}