import hero_pic from "../assets/images/hero-img.png"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin-logo.png"
import whatsapp from "../assets/images/whatsapp.png"
import reddit from "../assets/images/reddit.png"
import twitter from "../assets/images/twitter.png"



const Home = () => {
  return (
    <section className="home">
      <div className="home-main">
        <div className="words">
            <h1>Bringing your website aspiration to life </h1>
            <p>I am <strong>Opebiyi Oluwafemi</strong>, a full-stack developer, tech enthusiast and blockchain developer</p>
            <button>Get In Touch</button>
        </div>

        <div className="socials">
            <img src={whatsapp} alt="" />
            <img src={linkedin} alt="" />
            <img src={reddit} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            
        </div>
      </div>


      <div className="hero">
        <img src= {hero_pic} alt="" />
      </div>
    </section>
  )
}

export default Home
