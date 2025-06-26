import Link from "next/link";
import { Button } from "./button";
import { motion } from "framer-motion";
import { Maiden_Orange } from "next/font/google";

interface Items {
    href: string;
    name: string;
}

interface MenuProps {
  items: Items[];
}

const MotionButton = motion(Button);

export default function Menu({ items }: MenuProps) {
  return (
    <div className="flex flex-row gap-12 sticky">
      {items.map((item) => (
        <Link href={item.href} key={item.name}>
          <MotionButton
            variant="outline"
            initial={{ scale: 1.0 }}
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-orange-500 transition-colors dark:hover:bg-orange-500"
          >
            <h1>{item.name}</h1>
          </MotionButton>
        </Link>
      ))}
    </div>
  );
}