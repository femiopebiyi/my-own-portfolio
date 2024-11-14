
import cheesecake from "../assets/images/cheesecake.png"
import restaurant from "../assets/images/restaurant.png"
import www from "../assets/images/world-wide-web.png"
import nftSite from "../assets/images/nft-site.png"
import Footer from "../components/Footer"
import Others from "../components/Others"
import cartSite from "../assets/images/cartsite.png"
import socialMedia from "../assets/images/social-media.png"
import portfolio from "../assets/images/portfolio.png"




const Work = () => {
  const restaurantSiteLink = "https://restaurant-eight-coral.vercel.app/"
    const nftSiteLink = "https://nft-minting-site-two.vercel.app/"
    const cheesecakeSiteLink = "https://chesscake.onrender.com/"
    const socialSiteLink = "https://social-media-woad-sigma.vercel.app/"
    const cartSiteLink = "https://cart-react-alpha.vercel.app/"
    const portfolioSiteLink = "https://francis-portfolio.onrender.com/"


        function openWebsite(siteLink: string) {
  window.open(siteLink, '_blank'); // Opens in a new tab
}

  return (
    <>
    <div className="work">
      <div className="recent">
      <p className="recent-p">Recent work</p>
      <h1 className="recent-h">Showcasing my recent projects</h1>

      <div className="project-con">
        <div className="project">
            <div className="visit" onClick={()=>{openWebsite(restaurantSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={restaurant} alt="" className="work-img"/>
            </div>

            <div className="project-main">
                <h2>Restaurant Site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
                <p>Typescript</p>
                <p>NodeJs</p>
                <p>ExpressJs</p>
                <p>MongoDB</p>
            </div>
        </div>
        <div className="project">
             <div className="visit" onClick={()=>{openWebsite(cheesecakeSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={cheesecake} alt="" />
            </div>

            <div className="project-main">
                <h2>Cheesecake Site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
                <p>Typescript</p>
                <p>NodeJs</p>
                <p>Supabase</p>
            </div>
        </div>
        <div className="project">
             <div className="visit" onClick={()=>{openWebsite(nftSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={nftSite} alt="" />
            </div>

            <div className="project-main">
                <h2>NFT Website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
                <p>Typescript</p>
                <p>NodeJs</p>
                <p>Hardhat</p>
            </div>
        </div>
        <div className="project">
             <div className="visit" onClick={()=>{openWebsite(portfolioSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={portfolio} alt="" />
            </div>

            <div className="project-main">
                <h2>Portfolio Site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                {/* <p>Firebase</p> */}
                <p>Typescript</p>
                {/* <p>NodeJs</p> */}
                {/* <p>Hardhat</p> */}
            </div>
        </div>
        <div className="project">
             <div className="visit" onClick={()=>{openWebsite(cartSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={cartSite} alt="" />
            </div>

            <div className="project-main">
                <h2>Cart Website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Material UI</p>
                <p>Typescript</p>
                {/* <p>NodeJs</p>
                <p>Hardhat</p> */}
            </div>
        </div>
        <div className="project">
             <div className="visit" onClick={()=>{openWebsite(socialSiteLink)}}>
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={socialMedia} alt="" />
            </div>

            <div className="project-main">
                <h2>Social-Media Site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure veniam optio.</p>
            </div>

            <div className="stack-used">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
                <p>Typescript</p>
                <p>NodeJs</p>
                <p>Material UI</p>
            </div>
        </div>
        
      </div>


    </div>
    </div>

    <section className="others-con">
      <Others/>
    </section>

    <section className="footer-con">
      <Footer/>
    </section>

    </>
  )
}

export default Work
