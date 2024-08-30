'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full relative flex items-center">
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-in-out"></div>
          <div className="flex-1 bg-gray-600 dark:bg-[#121212] transition-all duration-300 ease-in-out"></div>
        </div>
        <button
          onClick={() => setTheme('light')}
          className={`flex-1 py-4 z-10 flex items-center justify-center transition-all duration-300 font-semibold ${
            theme === 'light' 
              ? 'text-gray-800 bg-white bg-opacity-70' 
              : 'text-gray-400 hover:bg-gray-100 hover:bg-opacity-10'
          }`}
        >
          Light Mode
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`flex-1 py-4 z-10 flex items-center justify-center transition-all duration-300 font-semibold ${
            theme === 'dark' 
              ? 'text-white  bg-opacity-70' 
              : 'text-gray-400 hover:bg-gray-900 hover:bg-opacity-10'
          }`}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;