import hero_pic from "../assets/images/hero-img.png"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin-logo.png"
import whatsapp from "../assets/images/whatsapp.png"
import reddit from "../assets/images/reddit.png"
import twitter from "../assets/images/twitter.png"
import Stack from "../components/Stack"



const Home = () => {
  return ( <>
    <section className="home">
      <div className="home-main">
        <div className="words">
            <h1>Bringing your website aspiration to life </h1>
            <p>I am <strong>Opebiyi Oluwafemi</strong>, a full-stack developer, tech enthusiast and blockchain developer</p>
            <button>Get In Touch</button>
        </div>

        <div className="socials">
          <a href="https://wa.me/09066245634" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/opebiyi-femi-005877215/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.reddit.com/user/opebiyifemi/" target="_blank" rel="noopener noreferrer">
            <img src={reddit} alt="Reddit" />
          </a>
          <a href="https://github.com/femiopebiyi" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://x.com/codewithopebiyi" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
</div>

      </div>


      <div className="hero">
        <img src= {hero_pic} alt="" />
      </div>
    </section>


    <section className="stack-con">
      <Stack/>
    </section>
    </>
  )
}

export default Home
