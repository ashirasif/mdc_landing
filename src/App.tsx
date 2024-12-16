import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"
import Services from "./components/services/Services"
import Careers from "./components/careers/Careers"
import Team from "./components/team/Team"
import ScrollToTop from "./components/scroll"

function App() {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>} />
        <Route path="services" element={<Services/>} />
        <Route path="careers" element={<Careers/>} />
        <Route path="our-team" element={<Team/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
