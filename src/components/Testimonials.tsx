import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CTO",
    company: "Tech Solutions Inc.",
    text: "Oluwafemi delivered an exceptional web application that exceeded our expectations. His expertise in React and blockchain development is outstanding.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Digital Ventures",
    text: "Working with Femi was a pleasure. He's professional, communicative, and delivers high-quality code on time. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupHub",
    text: "Femi's full-stack development skills helped us launch our platform quickly. His attention to detail and problem-solving abilities are impressive.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What People Say</h2>
      <p className="testimonials-subtitle">Testimonials from clients and colleagues</p>

      <div className="testimonials-container">
        <button 
          className="testimonial-nav prev" 
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button 
          className="testimonial-nav next" 
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
