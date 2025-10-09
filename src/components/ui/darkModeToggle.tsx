'use client'
import { Switch } from "./switch";

interface DarkModeToggleProps {
  setDarkMode: () => void;
}

export default function DarkModeToggle({ setDarkMode }: DarkModeToggleProps) {
  return (
    <div className="flex items-center">
      <Switch onClick={setDarkMode} />
    </div>
  );
}