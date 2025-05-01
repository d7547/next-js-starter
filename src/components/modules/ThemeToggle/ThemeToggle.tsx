'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-md border border-gray-200 dark:border-gray-600 focus:outline-none"
    >
      <div className="transition-transform duration-300 group-hover:rotate-12">
        {isDark ? (
          <IconSun size={20} className="text-yellow-400" />
        ) : (
          <IconMoon size={20} className="text-blue-600" />
        )}
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {isDark ? 'Light' : 'Dark'} Mode
      </span>
    </button>
  );
};

export default ThemeToggle;
