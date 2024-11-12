import html from "../assets/images/html-5.png"
import css from "../assets/images/css-3.png"
import javascript from "../assets/images/js.png"
import git from "../assets/images/git (1).png"
import react from "../assets/images/physics.png"
import hardhat from "../assets/images/hard-hat.png"
import solidity from "../assets/images/icons8-solidity-48.png"
import typescript from "../assets/images/typescript.png"
import firebase from "../assets/images/icons8-firebase-48.png"
import nodeJs from "../assets/images/node-js.png"


const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills & Expertise</h1>
      <p className="specialty">I specialize in building responsive websites and scalable web apps, using modern front-end and back-end technologies for seamless performance.</p>

      <div className="skill-box">
        <div className="skill-line left">
            <div className="skill">
                <h3>HTML5</h3>
                <p>Building semantic, accessible, and responsive web pages</p>
            </div>
            <div className="skill">
                <h3>CSS &SCSS</h3>
                <p>Profient in responsive and mobile-first designs.</p>
            </div>
            <div className="skill">
                <h3>Git & Github</h3>
                <p>Proficient with Git and GitHub for code management</p>
            </div>
            <div className="skill">
                <h3>JavaScript + ES6</h3>
                <p>Writing dynamic, modern JavaScript for web applications.</p>
            </div>
            <div className="skill">
                <h3>React.ts</h3>
                <p>Developing reusable components and managing application state.</p>
            </div>
        </div>

        <div className="middle">
            <div className="stack-icon">
                <div><img src={html} alt="" /></div>
                <div><img src={firebase} alt="" /></div>
            </div>
            <div className="stack-icon">
                <div><img src={css} alt="" /></div>
                <div><img src={solidity} alt="" /></div>
            </div>
            <div className="stack-icon">
                <div><img src={git} alt="" /></div>
                <div><img src={hardhat} alt="" /></div>
            </div>
            <div className="stack-icon">
                <div><img src={javascript} alt="" /></div>
                <div><img src={typescript} alt="" /></div>
            </div>
            <div className="stack-icon">
                <div><img src={react} alt="" /></div>
                <div><img src={nodeJs} alt="" /></div>
            </div>
            
        </div>


        <div className="skill-line right">
            <div className="skill">
                <h3>Firebase</h3>
                <p>Cloud backend for real-time data, auth, and hosting.</p>
            </div>
            <div className="skill">
                <h3>Solidity</h3>
                <p>Language for Ethereum smart contracts.</p>
            </div>
            <div className="skill">
                <h3>Hardhat</h3>
                <p>Tool for building and testing Ethereum smart contracts.</p>
            </div>
            <div className="skill">
                <h3>TypeScript</h3>
                <p>Typed JavaScript for safer, scalable code.s</p>
            </div>
            <div className="skill">
                <h3>NodeJs</h3>
                <p>Building back-end using using JavaScript</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
