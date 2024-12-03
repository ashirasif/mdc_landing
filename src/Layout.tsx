import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function Layout() {
  return (
    <div className="bg-[url('/bg-overall.png')] bg-cover bg-center overflow-hidden bg-no-repeat">
      <Navbar/>
      <div className="mt-36 sm:mt-52 bg-inherit">
      <Outlet/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Layout