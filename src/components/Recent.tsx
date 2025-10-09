
import cheesecake from "../assets/images/cheesecake.png"
import restaurant from "../assets/images/restaurant.png"
import www from "../assets/images/world-wide-web.png"
import nftSite from "../assets/images/pendax.jpg"
import { useNavigate } from "react-router-dom"


const Recent = () => {
    const restaurantSiteLink = "https://restaurant-eight-coral.vercel.app/"
    const pendaxSiteLink = "https://pendax-ten.vercel.app/"
    const cheesecakeSiteLink = "https://chesscake.onrender.com/"


    function openWebsite(siteLink: string) {
        window.open(siteLink, '_blank'); // Opens in a new tab
    }

    const navigate = useNavigate()

    return (
        <div className="recent">
            <p className="recent-p">Recent work</p>
            <h1 className="recent-h">Showcasing my recent projects</h1>

            <div className="project-con">
                <div className="project">
                    <div className="visit" onClick={() => { openWebsite(restaurantSiteLink) }}>
                        <img src={www} alt="" />
                        <p>Visit Website</p>
                    </div>
                    <div className="project-img">
                        <img src={restaurant} alt="" className="work-img" />
                    </div>

                    <div className="project-main">
                        <h2>Restaurant Site</h2>
                        <p>A website for a local restaurant showcasing their menu and services.</p>
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
                    <div className="visit" onClick={() => { openWebsite(cheesecakeSiteLink) }}>
                        <img src={www} alt="" />
                        <p>Visit Website</p>
                    </div>
                    <div className="project-img">
                        <img src={cheesecake} alt="" />
                    </div>

                    <div className="project-main">
                        <h2>Cheesecake Site</h2>
                        <p>A website that showcases a variety of delicious cheesecake recipes for dessert lovers.</p>
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
                    <div className="visit" onClick={() => { openWebsite(pendaxSiteLink) }}>
                        <img src={www} alt="" />
                        <p>Visit Website</p>
                    </div>
                    <div className="project-img">
                        <img src={nftSite} alt="" />
                    </div>

                    <div className="project-main">
                        <h2>Crytpo-Naira Website</h2>
                        <p>Converts cryptocurrency into Naira without middleman</p>
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

            </div>


            <div className="view-btn"><button onClick={() => { navigate("/work") }}>View All Projects</button></div>
        </div>
    )
}

export default Recent
