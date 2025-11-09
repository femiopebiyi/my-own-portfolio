import { useNavigate } from "react-router-dom"




const Others = () => {

  const navigate = useNavigate()
  return (
    <div className="others">
      <h1>Get a professional website with a <br />stunning design</h1>
      <button onClick={()=>{navigate("/contact")}}>Get in Touch</button>
    </div>
  )
}

export default Others
