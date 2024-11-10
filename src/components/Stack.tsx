
import rightArrow from "../assets/images/right-arrow (1).png"
import { useEffect } from "react";

const Stack = () => {

    useEffect(() => {
    // Create a glowing cursor element
    const glowingCursor = document.createElement("div");
    glowingCursor.classList.add("glowing-cursor");
    document.body.appendChild(glowingCursor);

    // Function to update cursor position
    const updateCursorPosition = (e: MouseEvent) => {
      glowingCursor.style.left = `${e.pageX}px`;
      glowingCursor.style.top = `${e.pageY}px`;
    };

    // Add mousemove event listener to track cursor
    document.addEventListener("mousemove", updateCursorPosition);

    // Function to show and hide the glow effect
    const stacks = document.querySelectorAll(".stack") as NodeListOf<HTMLElement>;
    stacks.forEach((stack) => {
      stack.addEventListener("mouseenter", () => {
        glowingCursor.style.opacity = "1";
      });
      stack.addEventListener("mouseleave", () => {
        glowingCursor.style.opacity = "0";
      });
    });

    // Cleanup function to remove event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(glowingCursor);
    };
  }, []);

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
