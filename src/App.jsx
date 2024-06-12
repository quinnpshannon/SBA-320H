import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Team from './pages/Team'
import NavBar from './components/NavBar'
import './App.css'

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/characters' element={<Characters/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/characters/:id' element={<Character/>} />
      </Routes>
    </>
  )
}