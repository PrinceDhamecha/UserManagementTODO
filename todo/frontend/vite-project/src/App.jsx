import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Read from './components/Read'
import Update from './components/Update';
import Create from './components/Create';


function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Create/>} />
          <Route  path='/all' element={<Read />} />
          <Route  path='/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
