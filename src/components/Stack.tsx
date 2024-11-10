
import rightArrow from "../assets/images/right-arrow (1).png"


const Stack = () => {
  return (
    <div className="stacks">
      <div className="stack">
        <h2>Front-End Development & APIs</h2>
        <p>I specialize in crafting seamless, responsive user interfaces that not only look great but also provide a smooth user experience. 
        </p>
        <button>View More  <img src={rightArrow} alt="" /></button>
      </div>
      <div className="stack">
        <h2>Responsive Front-End Design</h2>
        <p>I transform ideas into interactive, user-friendly websites and applications.

        </p>
        <button>View More  <img src={rightArrow} alt="" /></button>
      </div>
      <div className="stack">
        <h2>Blockchain Development</h2>
        <p> I build secure, decentralized applications using blockchain technology, enabling transparent and tamper-proof solutions. From smart contracts to token integration.

        </p>
        <button>View More <img src={rightArrow} alt="" /></button>
      </div>
      <div className="stack">
        <h2>Back-End Integration</h2>
        <p>I build scalable back-end services using Node.js, Express, and MongoDB, ensuring high performance and secure databases.

        </p>
        <button>View More <img src={rightArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Stack
