import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive, fast, and modern websites using the latest technologies like React, TypeScript, and Next.js.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Single Page Applications',
        'Progressive Web Apps'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'React Native Apps',
        'Cross-Platform Development',
        'Native Performance',
        'App Store Deployment'
      ]
    },
    {
      icon: '⛓️',
      title: 'Smart Contract Development',
      description: 'Developing secure and efficient smart contracts for blockchain applications using Solidity and Web3 technologies.',
      features: [
        'Solidity Development',
        'Smart Contract Auditing',
        'DApp Integration',
        'Blockchain Solutions'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user experiences that keep your visitors coming back for more.',
      features: [
        'User Interface Design',
        'Wireframing & Prototyping',
        'User Flow Analysis',
        'Brand Identity Design'
      ]
    },
    {
      icon: '📲',
      title: 'Mobile-First Design',
      description: 'Creating beautiful, user-friendly interfaces that work seamlessly across all devices and screen sizes.',
      features: [
        'Responsive Design',
        'Cross-Browser Compatibility',
        'Mobile Optimization',
        'Performance Optimization'
      ]
    },
    {
      icon: '⚙️',
      title: 'Frontend Development',
      description: 'Expert development using modern frameworks and tools to bring your vision to life with clean, maintainable code.',
      features: [
        'React & TypeScript',
        'State Management',
        'API Integration',
        'Code Optimization'
      ]
    },
    {
      icon: '🖥️',
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications with secure APIs and efficient database management.',
      features: [
        'RESTful API Development',
        'Database Design & Management',
        'Authentication & Authorization',
        'Server-Side Logic'
      ]
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Ensuring your website loads quickly and runs smoothly with best practices and optimization techniques.',
      features: [
        'Speed Optimization',
        'SEO Implementation',
        'Lazy Loading',
        'Code Splitting'
      ]
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly and up-to-date with the latest standards.',
      features: [
        'Bug Fixes',
        'Regular Updates',
        'Technical Support',
        'Feature Enhancements'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Services - Femi Opebiyi</title>
        <meta name="description" content="Professional web development services including frontend development, UI/UX design, and performance optimization." />
      </Helmet>

      <div className="services-page">
        <div className="services-hero">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services I Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="services-subtitle"
          >
            Transforming ideas into exceptional digital experiences
          </motion.p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2>Ready to start your project?</h2>
          <p>Let's work together to bring your vision to life</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </motion.div>
      </div>

      <Footer />
    </>
  )
}

export default Services
