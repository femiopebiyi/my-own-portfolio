import { motion } from 'framer-motion';
import { useState } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category: 'web3' | 'fullstack' | 'frontend';
}

interface ProjectFilterProps {
  projects: Project[];
  onFilter: (filtered: Project[]) => void;
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web3', label: 'Web3/Blockchain' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' }
];

const ProjectFilter = ({ projects, onFilter }: ProjectFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    let filtered = projects;

    if (category !== 'all') {
      filtered = projects.filter(project => project.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    onFilter(filtered);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    let filtered = projects;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }

    if (term) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term.toLowerCase()))
      );
    }

    onFilter(filtered);
  };

  return (
    <div className="project-filter">
      <div className="filter-search">
        <input
          type="text"
          placeholder="Search projects by name or technology..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-buttons">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
