import React from 'react'
import {Routes, Route} from "react-router-dom"
import All from './All'
import Css from './Css'
import Html from './Html'
import Javascript from './Javascript'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<All/>} ></Route>
        <Route path='/html' element={<Html/>} ></Route>
      
        <Route path='/css' element={<Css/>} ></Route>
        <Route path='/javascript' element={<Javascript/>} ></Route>
   </Routes>
  )
}

export default Allroutes