
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { UIContextProvider } from './assets/contextAPI/UIContext'
import { HelmetProvider } from 'react-helmet-async'
import ScrollProgress from './components/ScrollProgress'
import EasterEgg from './components/EasterEgg'
import { lazy, Suspense } from 'react'
import LoadingScreen from './components/LoadingScreen'

// Lazy load pages for better performance
const LazyHome = lazy(() => import('./pages/Home'))
const LazyWork = lazy(() => import('./pages/Work'))
const LazyContact = lazy(() => import('./pages/Contact'))
const LazyNotFound = lazy(() => import('./pages/NotFound'))

function App() {

  return (
    <div className='App'>
      <HelmetProvider>
        <UIContextProvider>
          <Router>
            <ScrollProgress />
            <EasterEgg />
            <NavBar/>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route index element = {<LazyHome/>}/>
                <Route path='/work' element={<LazyWork/>}/>
                <Route path='/contact' element={<LazyContact/>}/>
                <Route path='*' element={<LazyNotFound/>}/>
              </Routes>
            </Suspense>
          </Router>
        </UIContextProvider>
      </HelmetProvider>
    </div>
    
  )
}

export default App
