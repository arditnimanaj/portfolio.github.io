'use client';

import Link from 'next/link';
import { Button } from './button';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import SocialMedia from './socialMedia';

interface Items {
  href: string;
  name: string;
}

interface MenuProps {
  items: Items[];
}

const MotionButton = motion(Button);

export default function Menu({ items }: MenuProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen(false);

  return (
    <div>
      {isMobile ? (
        <>
          {!open && (
            <button
              className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          )}
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={handleMenuClick}
            />
          )}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 z-50 transform transition-transform duration-300 ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4 border-b border-gray-200 dark:border-neutral-800">
              <button
                className="p-2 rounded-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center px-4 py-6 space-y-4">
              {items.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  onClick={handleMenuClick}
                  className="w-full flex justify-center"
                >
                  <MotionButton
                    variant="outline"
                    className="w-44 hover:bg-orange-500 transition-colors dark:hover:bg-orange-500"
                    initial={{ scale: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-semibold">{item.name}</span>
                  </MotionButton>
                </Link>
              ))}
            </nav>
            <div className="flex justify-center mt-auto pb-6">
              <SocialMedia />
            </div>
          </aside>
        </>
      ) : (
        <div className="flex flex-row gap-12">
          {items.map((item) => (
            <Link href={item.href} key={item.name}>
              <MotionButton
                variant="outline"
                className="w-full justify-start"
                initial={{ scale: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </MotionButton>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
