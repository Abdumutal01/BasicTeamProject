import React from 'react'
import './App.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/kartochka'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

export default function App() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Page1  />} />
        <Route path='page2' element={<Page2 t={t} />} />
        <Route path='page3' element={<Page3 t={t} />} />
        <Route path='page4' element={<Page4  t={t}/>} />
        <Route path='about' element={<About t={t} />} />
        <Route path='contact' element={<Contact t={t} />} />
      </Routes>

      <Footer t={t} />
    </div>
  )
}
