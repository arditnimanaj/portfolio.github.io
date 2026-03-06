'use client'
import { Switch } from "./switch";
import { FaMoon } from "react-icons/fa";
interface DarkModeToggleProps {
  setDarkMode: () => void;
}

export default function DarkModeToggle({ setDarkMode }: DarkModeToggleProps) {
  return (
    <div className="flex items-center">
      <FaMoon className="text-gray-800 dark:text-gray-200 text-xl mr-2" />
      <Switch onClick={setDarkMode} />
    </div>
  );
}