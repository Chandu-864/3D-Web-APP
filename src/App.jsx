import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, Fun, Projects,Contact} from './pages/index'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router basename='/3D-Portfolio'>
            <Navbar />
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/fun' element = {<Fun />} />
                <Route path='/projects' element = {<Projects />} />
                <Route path='/contact' element = {<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App