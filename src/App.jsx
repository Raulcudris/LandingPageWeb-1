import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Pricing } from './pages/Pricing'
import { Services } from './pages/Services'

export const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={ <Home />} /> 
          <Route path='/pricing' element ={ <Pricing />} />      
          <Route path='/services' element ={ <Services />} /> 
          <Route path='/contact' element ={ <Contact />} />      
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}
