import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function Layout() {
  return (
    <div className="bg-[url('/bg-overall.png')] bg-fixed flex flex-col min-h-screen bg-center overflow-hidden">
      <Navbar/>
      <div className="mt-36 sm:mt-52 bg-inherit flex-1">
      <Outlet/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Layout
