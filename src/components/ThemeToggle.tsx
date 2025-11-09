import { useContext } from 'react';
import { UIContext } from '../assets/contextAPI/UIContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(UIContext);

  // Calculate slide distance: track width (50px) - slider width (20px) - padding (4px)
  const slideDistance = 26;

  return (
    <div className="theme-toggle-wrapper">
      <motion.button
        className="theme-toggle-switch"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        role="switch"
        aria-checked={theme === 'dark'}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor: theme === 'dark' ? 'rgba(255, 218, 87, 0.2)' : 'rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-slider"
          animate={{
            x: theme === 'dark' ? slideDistance : 0,
            rotate: theme === 'dark' ? 360 : 0,
            backgroundColor: theme === 'dark' ? '#ffda57' : '#000000'
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
            rotate: { duration: 0.6 }
          }}
        >
          <motion.div
            initial={false}
            animate={{
              scale: theme === 'light' ? 1 : 0,
              opacity: theme === 'light' ? 1 : 0,
              rotate: theme === 'light' ? 0 : 180
            }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              scale: theme === 'dark' ? 1 : 0,
              opacity: theme === 'dark' ? 1 : 0,
              rotate: theme === 'dark' ? 0 : -180
            }}
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
