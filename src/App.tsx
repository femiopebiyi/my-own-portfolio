
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route index element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
