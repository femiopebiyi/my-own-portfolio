
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Work from './pages/Work'

function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/work' element={<Work/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
