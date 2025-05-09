import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === null) {
      setDarkMode(systemPrefersDark);
    } else {
      setDarkMode(savedMode === 'true');
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const buttonVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.button
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={buttonVariants}
        onClick={() => setDarkMode(!darkMode)}
        className="p-3 rounded-full shadow-lg bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <FiSun className="w-5 h-5 text-yellow-300" />
        ) : (
          <FiMoon className="w-5 h-5 text-gray-700" />
        )}
      </motion.button>
    </div>
  );
};

export default DarkModeToggle;