import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import View from './Component/View'
import Update from './Component/Update'
import Create from './Component/Create'
import Landing from './Component/Landing'
import Header from './Component/Header'
import './bootstrap.min (1).css'
function App(){

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App