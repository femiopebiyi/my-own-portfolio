import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Started Full-Stack Journey",
    description: "Began learning web development with HTML, CSS, and JavaScript",
    icon: "🚀"
  },
  {
    year: "2023",
    title: "Mastered React & TypeScript",
    description: "Built multiple projects using React, TypeScript, and modern frameworks",
    icon: "⚛️"
  },
  {
    year: "2024",
    title: "Blockchain Development",
    description: "Expanded into Web3, learning Solidity, Hardhat, and smart contract development",
    icon: "⛓️"
  },
  {
    year: "2025",
    title: "Full-Stack Expert",
    description: "Delivering end-to-end solutions with React, Node.js, and blockchain technologies",
    icon: "💎"
  },
];

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-icon">{item.icon}</div>
      <div className="timeline-content">
        <h3 className="timeline-year">{item.year}</h3>
        <h4 className="timeline-title">{item.title}</h4>
        <p className="timeline-description">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">My Journey</h2>
      <p className="timeline-subheading">A timeline of my development career</p>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;