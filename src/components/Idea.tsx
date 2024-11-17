
import dashboard from "../assets/images/dashboard.png"
import checkmark from "../assets/images/check-mark.png"


const Idea = () => {
  return (
    <div className="idea">
        <div className="left-side">
            <div className="insight-con">
                <div className="insight">
                    <h3>Insight</h3>
                    <p>Develop from concept to launch</p>
                </div>

                <h1>🎊</h1>
            </div>

            <img src= {dashboard} alt="" />
        </div>

        <div className="right-side">
            <h1>Let's Build Your Big Idea</h1>
            <p className="ready">Ready to take your website, app, or design to the next level? Whether you're launching a startup, revamping your brand, or need a custom solution, I can help turn your vision into reality.</p>

            <div className="ability">
            <p><img src={checkmark} alt="" />&nbsp;  Expert in modern frontend web development</p>
            <p><img src={checkmark} alt="" />&nbsp;  Unique designs that stands out</p>
            <p><img src={checkmark} alt="" />&nbsp;  Custom-built solutions for your specific goal</p>
            <p><img src={checkmark} alt="" />&nbsp;  Optimized for speed and security from the ground</p>
            </div>
        </div>
    </div>
  )
}

export default Idea
