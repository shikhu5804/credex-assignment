import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode preference when the component is mounted
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === null) {
      setDarkMode(systemPrefersDark);
    } else {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  // Update the document's class and localStorage whenever darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-3 rounded-full shadow-lg bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <FiSun className="w-5 h-5 text-yellow-300" />
        ) : (
          <FiMoon className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
