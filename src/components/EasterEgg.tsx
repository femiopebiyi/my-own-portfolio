import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

const EasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Console message easter egg
    console.log(
      '%c👨‍💻 Hey there, fellow developer!',
      'font-size: 20px; font-weight: bold; color: #4CAF50;'
    );
    console.log(
      '%c🎉 You found the secret console message!',
      'font-size: 16px; color: #2196F3;'
    );
    console.log(
      '%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A',
      'font-size: 14px; color: #FF9800;'
    );
    console.log(
      '%c📧 Let\'s connect: opebiyibiodun10@gmail.com',
      'font-size: 14px; color: #9C27B0;'
    );

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === konamiCode[currentIndex]) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === konamiCode.length) {
      setShowEasterEgg(true);
      console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'font-size: 30px; font-weight: bold; color: gold;');
      setTimeout(() => {
        setShowEasterEgg(false);
        setCurrentIndex(0);
      }, 5000);
    }
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          className="easter-egg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="easter-egg-content">
            <motion.h2
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              🎮 You Found It! 🎮
            </motion.h2>
            <p>You've unlocked the secret achievement!</p>
            <div className="achievement">
              <span className="trophy">🏆</span>
              <span>Master Code Breaker</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
