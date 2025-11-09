import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, label, suffix = '', duration = 2 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="stat-number">{count}{suffix}</h2>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <Counter end={15} label="Projects Completed" suffix="+" />
        <Counter end={10} label="Technologies Mastered" suffix="+" />
        <Counter end={3} label="Years Experience" suffix="+" />
        <Counter end={100} label="Client Satisfaction" suffix="%" />
      </div>
    </section>
  );
};

export default AnimatedStats;
