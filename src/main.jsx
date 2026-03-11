import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import Login from './component/Login/login.jsx'
import Signup from './component/Signup/Signup.jsx'
import Houses from './component/Houses/Houses.jsx'
import Listing from './component/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contact from './component/Contactus/Contact.jsx'
import Rooms from './component/Rooms/Rooms.jsx'
import Farm from './component/Farm/Farm.jsx'
import Pool from './component/Pool/Pool.jsx'
import Tent from './component/Tent/Tent.jsx'
import Cabins from './component/Cabins/Cabins.jsx'
import Shops from './component/Shops/Shops.jsx'
import Forest from './component/Forest/Forest.jsx'
import Shortlist from './component/Shortlist/Shortlist.jsx'
import Payment from './component/Payment/Payment.jsx'
import Landing from './component/Landing/Landing.jsx'
import About from './component/Aboutus/About.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index element={<Landing />} />
    <Route path='Trending' element={<Home />} />
    <Route path='Login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='Houses' element={<Houses />} />
    <Route path='Rooms' element={<Rooms />} />
    <Route path='Farm' element={<Farm />} />
    <Route path='Pool' element={<Pool />} />
    <Route path='Tent' element={<Tent />} />
    <Route path='Cabins' element={<Cabins />} />
    <Route path='Shops' element={<Shops />} />
    <Route path='Forest' element={<Forest />} />
    <Route path='Shortlist' element={<Shortlist />} />
    <Route path='Listing' element={<Listing />} />
    <Route path='Contact' element={<Contact />} />
    <Route path='Payment' element={<Payment />} />
    <Route path='About' element={<About />} />
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
      <RouterProvider router={router} />
    </Usercontext>
  </StrictMode>,
)
