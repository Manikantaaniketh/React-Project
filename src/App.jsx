import React from 'react'
import "./App.css"
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import Login from './component/Login/login'
import Signup from './component/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Houses from './component/Houses/Houses'
import Listing from './component/Listing/Listing'
import Contact from './component/Contactus/Contact'
import Footer from './component/Footer/Footer'
import Rooms from './component/Rooms/Rooms'

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <main className="main-content">
        <Outlet />

      </main>
      <Footer />
    </div>
  )
}

export default App

