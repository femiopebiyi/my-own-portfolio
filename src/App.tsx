
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
