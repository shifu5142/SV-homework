import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import students from './student'
import Header  from './components/header'
import Dashboard   from './components/Dashboard'
import Footer from './components/Footer'
import AddStudent from './components/addStudent'
//////////////////////////////////////////////////////////////////
function App() {
  return (
    <>
    <section class='part1'>
      <Header/>
      <Dashboard/>
      <Footer/>
      </section>
      <section class='part2'>
        <AddStudent/>
      </section>
    </>
  )
}

export default App
