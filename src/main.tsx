import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import Properties from './pages/Properties'
// import Contact from './pages/Contact'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import TermsConditions from './pages/TermsConditions'
// import Privacy from './pages/Privacy'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: false,
})
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  // {
  //   path: "/about",
  //   element: <About/>
  // },
  // {
  //   path: "/services",
  //   element: <Services/>
  // },
  // {
  //   path: "/properties",
  //   element: <Properties/>
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // },
  // {
  //   path: "/login",
  //   element: <Login/>
  // },
  // {
  //   path: "/signup",
  //   element: <Signup/>
  // },
    // {
  //   path: "/terms",
  //   element: <TermsConditions/>
  // },
  // {
  //   path: "/privacy",
  //   element: <PrivacyPolicy/>
  // }
], {
  basename: "/task-4-flora"
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
