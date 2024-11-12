
import cheesecake from "../assets/images/cheesecake.png"
import restaurant from "../assets/images/restaurant.png"
import www from "../assets/images/world-wide-web.png"


const Recent = () => {
  return (
    <div className="recent">
      <p className="recent-p">Recent work</p>
      <h1 className="recent-h">Showcasing my recent projects</h1>

      <div className="project-con">
        <div className="project">
            <div className="visit">
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
             <div className="visit">
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
             <div className="visit">
                    <img src={www} alt="" />
                    <p>Visit Website</p>
                </div>
            <div className="project-img">
                <img src={restaurant} alt="" />
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
                <p>Hardhat</p>
            </div>
        </div>
        
      </div>


      <div className="view-btn"><button>View All Projects</button></div>
    </div>
  )
}

export default Recent
