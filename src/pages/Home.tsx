import hero_pic from "../assets/images/hero-img.png"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin-logo.png"
import whatsapp from "../assets/images/whatsapp.png"
import reddit from "../assets/images/reddit.png"
import twitter from "../assets/images/twitter.png"
import Stack from "../components/Stack"
import Idea from "../components/Idea"
import Skills from "../components/Skills"
import Recent from "../components/Recent"
import Others from "../components/Others"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { Typewriter } from "../functions/Typewriter"
import SEO from "../components/SEO"
import AnimatedStats from "../components/AnimatedStats"
import Testimonials from "../components/Testimonials"
import Timeline from "../components/Timeline"
import { motion } from "framer-motion"



const Home = () => {

  
  const navigate = useNavigate()

  return ( <>
    <SEO />
    <section className="home">
      <motion.div 
        className="home-main"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="words">
            <Typewriter 
            texts={[
                "Hi, I'm Oluwafemi.",
                "I am Creative.",
                "I Love Design.",
                "I Love to Develop."
            ]}
            period={2000}
            className="my-custom-class"
        />
            <p>I am <strong>Opebiyi Oluwafemi</strong>, a full-stack developer, tech enthusiast and blockchain developer</p>
            <motion.button 
              onClick={()=>{navigate("/contact")}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
        </div>

        <div className="socials">
          <motion.a 
            href="https://wa.me/+2349066245634" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={whatsapp} alt="WhatsApp" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/opebiyi-femi-005877215/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={linkedin} alt="LinkedIn" />
          </motion.a>
          <motion.a 
            href="https://www.reddit.com/user/opebiyifemi/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={reddit} alt="Reddit" />
          </motion.a>
          <motion.a 
            href="https://github.com/femiopebiyi" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={github} alt="GitHub" />
          </motion.a>
          <motion.a 
            href="https://x.com/codewithopebiyi" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={twitter} alt="Twitter" />
          </motion.a>
</div>

      </motion.div>


      <motion.div 
        className="hero"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src= {hero_pic} alt="" />
      </motion.div>
    </section>

    <AnimatedStats />

    <section className="stack-con">
      <Stack/>
    </section>

    <section className="idea-con">
      <Idea/>
    </section>

    <section className="skills-con">
      <Skills/>
    </section>

    <Timeline />

    <section className="recent-con">
      <Recent/>
    </section>

    <Testimonials />

    <section className="others-con">
      <Others/>
    </section>

    <section className="footer-con">
      <Footer/>
    </section>

    </>
  )
}

export default Home
