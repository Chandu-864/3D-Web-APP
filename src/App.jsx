import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, Fun, Contact} from './pages/index'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/fun' element = {<Fun />} />
                <Route path='/contact' element = {<Contact />} />
            </Routes>
        </HashRouter>
    </main>
  )
}

export default App